import React, { useEffect, useState } from 'react'
import './ArtworkDetailsPage.css'
import { Container, Button, ButtonGroup, Carousel } from 'react-bootstrap'
import { useParams, Link, useNavigate } from 'react-router-dom'
import artworkServices from '../../services/artwork.services'
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';


function ArtworkDetailsPage() {
    const { artworkId } = useParams()
    const [artwork, setArtwork] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const [artworkData, setArtworkInfo] = useState([]);


    useEffect(() => {
        artworkServices
            .getOneArtwork(artworkId)
            .then(({ data }) => {
                setArtwork(data)
                setIsLoading(false)
                setArtworkInfo(data.artworksInfo);
            })
            .catch(err => console.log(err))
    }, [artworkId])

    const handleDeleteArtwork = () => {
        artworkServices
            .deleteArtwork(artworkId)
            .then(() => navigate('/profile'))
            .catch(err => console.log(err))
    }

    const handleCancel = () => {
        navigate(`/collections/:userId`);
    };

    return (
        <div className="artwork-details-container">

            <div className="zoom-container">
                <img
                    className="zoom-image"
                    src={artwork.image}
                    alt={artwork.title}
                    style={{ height: '500px', width: 'auto', margin: '0 auto' }}
                />
            </div>
            <div className="artwork-details mt-4">
                <div className="collection-profile-card">
                    <h4><strong>{artwork.title}</strong></h4>
                    <h5>{artwork.technique}</h5>
                    <h5>{artwork.dimension}</h5>
                    <h5>{artwork.year}</h5>
                </div>
            </div>



            <div className="button-container">
                <Button className="buttom-back" as={Link} to={`/collections/${artwork.owner?._id}`} type="button">
                    {'∙|  Back'}
                </Button>

                <ButtonGroup className="mt-4">
                    <Button variant="outline-danger" as={Link} to={`/collections/${artwork.owner?._id}`}>Back</Button>
                    <Button variant="outline-danger" as={Link} to={`/edit-artwork/${artworkId}`}>Edit Artwork</Button>
                    <Button variant="outline-danger" onClick={handleDeleteArtwork}>Delete Artwork</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default ArtworkDetailsPage
