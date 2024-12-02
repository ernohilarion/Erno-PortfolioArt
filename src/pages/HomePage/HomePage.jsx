import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <video autoPlay loop playsInline muted className="video-background">
                <source src="https://res.cloudinary.com/dydvmhge1/video/upload/v1717599662/Mi_peli%CC%81cula_bulq29.mp4" type="video/mp4" />
            </video>

            <div className="container-background">

                <div style={{ width: '250px', height: '250px', margin: 'auto' }}>
                    <Spinner
                        animation="border"
                        role="status"
                        style={{ width: '250px', height: '250px' }}
                        className="spinner"
                    >
                        <span className="visually-hidden">THE ROW</span>
                        <h4 className="spinner-text"><strong>ERNO </strong></h4>
                    </Spinner>
                </div>
            </div>

        </>
    );
}

export default HomePage;
