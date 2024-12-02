import React, { useContext } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { AuthContext } from '../../context/auth.context';

function Footer() {
    const { user, logout } = useContext(AuthContext);

    return (
        <footer className="footer">
            <Navbar className="bg-body-tertiary rounded-navbar" fixed="bottom" expand="lg">
                <Container fluid>
                    <div className="d-flex align-items-center">
                        <Navbar.Brand>
                            <Link to="/" className="navbar-logo"></Link>
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-footer-nav" />
                    <Navbar.Collapse id="responsive-footer-nav" className="justify-content-end">
                        <Nav>
                            {user ? (
                                <>

                                    <Nav.Link onClick={logout}>Log Out</Nav.Link>
                                    <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                                    <Link to='/add-artwork'>Add Artwork</Link>
                                    <Link to='/add-exhibition'>Add Exhibition</Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="text-center mt-5 mb-5">
                <h5>All Rights Reserved. © 2024</h5>
            </div>
        </footer>
    );
}

export default Footer;