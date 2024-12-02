import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './AboutUsPage.css';

function AboutUsPage() {
    return (
        <div className="aboutus-container">
            <Card className="text-center custom-card">
                <Card.Body>
                    <Card.Title><strong>Ernesto Hilarión</strong>
                        <hr></hr>
                        Soy un artista que explora todos los rincones del arte con una pasión tan grande que, cuando me pongo a pintar, el color explota más que una fiesta de fuegos artificiales. Mis formas orgánicas no solo me apasionan, ¡me hacen ver mini-personas o… bueno, cosas más curiosas! Desde paisajes que te invitan a viajar hasta, sí, penes (¿por qué no?).                        <hr></hr>
                    </Card.Title>
                    <ListGroup>
                        <ListGroup.Item as="a" href="https://www.linkedin.com/in/ernestohilarion/" target="_blank">LinkedIn Ernesto</ListGroup.Item>
                        <ListGroup.Item as="a" href="https://github.com/ernohilarion" target="_blank">GitHub Ernesto</ListGroup.Item>
                    </ListGroup>


                </Card.Body>
            </Card>
        </div>

    );
}

export default AboutUsPage;
