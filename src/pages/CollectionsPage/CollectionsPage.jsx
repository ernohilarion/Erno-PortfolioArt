

import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import CollectionsList from '../../components/CollectionsList/CollectionsList.jsx'
import './CollectionsPage.css'

function AboutUsPage() {


    return (
        <div className="about-us-page">
            {/* <h2 className="therow-title">COLLECTIONS</h2> */}
            <hr className="hr-full-width" />
            <Container>
                <CollectionsList />
            </Container>
        </div>

    )

}

export default AboutUsPage