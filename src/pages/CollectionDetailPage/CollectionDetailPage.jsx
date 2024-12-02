
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import userServices from '../../services/user.services';
import { Spinner, Button } from "react-bootstrap";
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';
import './CollectionDetailPage.css';
import { useNavigate } from 'react-router-dom';
import grid4 from '../../assets/grid4.png';
import grid6 from '../../assets/grid6.png';
import grid8 from '../../assets/grid8.png';


function CollectionDetailPage() {
    const { user } = useContext(AuthContext);
    const { userId } = useParams();
    const [userData, setUserInfo] = useState({});
    const [artworkData, setArtworkInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [viewClass, setViewClass] = useState('grid-4-columns'); // Clase inicial de columnas

    const navigate = useNavigate();

    useEffect(() => {
        loadUserInfo();
    }, [userId]);

    const loadUserInfo = () => {
        userServices
            .getOneUsers(userId)
            .then(({ data }) => {
                setUserInfo(data.userInfo);
                setArtworkInfo(data.artworksInfo);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    const handleCancel = () => {
        navigate(`/collections`);
    };

    const handleViewChange = (view) => {
        switch (view) {
            case 4:
                setViewClass('grid-4-columns');
                break;
            case 6:
                setViewClass('grid-6-columns');
                break;
            case 8:
                setViewClass('grid-8-columns');
                break;
            default:
                setViewClass('grid-4-columns');
        }
    };

    return (
        <div className="collectionDetailPage">
            {isLoading ? (
                <div className="spinner-container">
                    <Spinner animation="border" />
                </div>
            ) : (
                <>
                    <div className="image-container">
                        <img src={userData?.backgrdimage} alt="User Background" className="img-fluid" />
                        <div className="collection-backgrd-text">
                            <marquee direction="down" scrollamount="3" behavior="slide" loop="1">
                                <h1 className="new-name">{userData?.username}</h1>
                            </marquee>
                        </div>
                    </div>

                    <div class="other-container">
                        <div class="other-text">
                            <h1 class="new-name">{userData?.userbio}</h1>
                        </div>
                    </div>


                    <div className="view-selector">
                        <Button variant="outline-primary" onClick={() => handleViewChange(4)}>
                            <img src={grid4} alt="4 prints" />
                        </Button>
                        <Button variant="outline-primary" onClick={() => handleViewChange(6)}>
                            <img src={grid6} alt="6 prints" />
                        </Button>
                        <Button variant="outline-primary" onClick={() => handleViewChange(8)}>
                            <img src={grid8} alt="8 prints" />
                        </Button>
                    </div>

                    {/* Grid dinámico */}
                    <div className={`grid-container ${viewClass}`}>
                        {artworkData.map((artwork, index) => (
                            <div className="grid-item" key={index}>
                                <ArtworkCard {...artwork} />
                            </div>
                        ))}
                    </div>

                    <div className="button-container" >
                        <Button
                            className="buttom-back"
                            // variant="outline-danger mb-3"
                            type="cancel"
                            onClick={handleCancel}
                        >
                            {'∙|  Back'}
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CollectionDetailPage;