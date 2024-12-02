import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import './EditUserForm.css';
import userServices from "../../services/user.services";

const EditUserForm = () => {

    const [editUser, setEditUser] = useState({
        username: '',
        artist: '',
        country: '',
        year: '',
        userimage: '',
        backgrdimage: '',
        userbio: '',
    })

    const [isLoading, setIsLoading] = useState(true)
    const { userId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        userServices.getOneUsers(userId)
            .then(response => {
                setEditUser(response.data.userInfo);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [userId]);


    const handleInputChange = e => {
        const { name, value, checked, type } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setEditUser({ ...editUser, [name]: newValue });
    };

    const handleFileChange = e => {
        const { name, files } = e.target;
        setEditUser({ ...editUser, [name]: files[0] });
    };

    const handleUserSubmit = e => {
        e.preventDefault();

        userServices
            .editUsers(userId, editUser)
            .then(() => navigate('/profile'))
            .catch(err => console.log(err));
    };
    const handleCancel = () => {
        navigate(`/profile`)
    }


    return (
        <div className="EditUserForm">
            {isLoading ? <p>Loading...</p> : (

                <Form onSubmit={handleUserSubmit}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={editUser.username} name="username" disabled />
                        <Form.Control type="text" value={editUser.artist} name="username" disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" value={editUser.country} name="country" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="year">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number" value={editUser.year} name="year" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userimage">
                        <Form.Label>Profile image (URL)</Form.Label>
                        <Form.Control type="file" name="userimage" onChange={handleFileChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="backgrdimage">
                        <Form.Label>Background image (URL)</Form.Label>
                        <Form.Control type="file" name="backgrdimage" onChange={handleFileChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userbio">
                        <Form.Label>User bio</Form.Label>
                        <Form.Control type="text" value={editUser.userbio} name="userbio" onChange={handleInputChange} />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="outline-danger mb-2" onClick={handleUserSubmit} type="submit">Save changes</Button>
                        <Button variant="outline-danger" onClick={handleCancel} type="submit">Cancel changes</Button>
                    </div>
                </Form>
            )}
        </div>
    );
}

export default EditUserForm;