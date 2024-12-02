import { Link } from "react-router-dom"
import { Card, ListGroup } from 'react-bootstrap'
import './ArtworkCard.css'

const ArtworkCard = ({ _id, title, dimension, year, price, technique, image, owner }) => {

    return (
        <div className="ArtworkCard">
            <Card className="artwork-card">
                <div className="artwork-image-container">
                    <Link to={`/artwork-details/${_id}`}>
                        <Card.Img variant="top" src={image} alt={title} className="artwork-thumbnail" />
                    </Link>
                </div>
                <div className="artwork-text-container">
                    <Card.Body className="artwork-details">
                        {/* <Card.Title><strong>{owner.username} {owner.artist}</strong></Card.Title> */}
                        <Card.Text>
                            <div className='collection-profile-card'>
                                <h4><strong>{title}</strong></h4>
                                <h5>{technique}</h5>
                                <h5>{dimension}</h5>
                                <h5>{year}</h5>
                                {/* <h5>{price} €</h5> */}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default ArtworkCard

