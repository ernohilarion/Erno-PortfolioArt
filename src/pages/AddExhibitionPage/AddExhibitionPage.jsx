import React from 'react';
import './AddExhibitionPage.css';
import AddExhibitionForm from '../../components/AddExhibitionForm/AddExhibitionForm'
import { Container, Row, Col } from "react-bootstrap"
import ScrollToTop from "react-scroll-to-top";


function AddExhibitionPage() {

    return (
        <div className='AddExhibitionPage mt-3'>
            <Container>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h2 className="therow-title">ADD NEW EXHIBITION</h2>
                        <hr className="hr-full-width" />

                        <AddExhibitionForm />

                    </Col>
                </Row>
                <ScrollToTop smooth />

            </Container>
        </div >
    )
}

export default AddExhibitionPage