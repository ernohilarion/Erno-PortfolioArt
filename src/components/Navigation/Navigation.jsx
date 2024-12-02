// // import React, { useState, useEffect, useContext } from 'react';
// // import './Navigation.css';
// // import { Link } from "react-router-dom";
// // import Container from 'react-bootstrap/Container';
// // import Navbar from 'react-bootstrap/Navbar';
// // import Nav from 'react-bootstrap/Nav';
// // import { AuthContext } from '../../context/auth.context';

// // function Navigation() {
// //     const { user, logout } = useContext(AuthContext);
// //     const [scrollingDown, setScrollingDown] = useState(false);
// //     const [prevScrollPos, setPrevScrollPos] = useState(0);

// //     const handleScroll = () => {
// //         const currentScrollPos = window.scrollY; // Usamos scrollY para obtener la posición del scroll
// //         if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
// //             setScrollingDown(true); // Hacemos que el Navbar se oculte cuando se baja
// //         } else if (currentScrollPos < prevScrollPos) {
// //             setScrollingDown(false); // Lo mostramos inmediatamente cuando subimos
// //         }
// //         setPrevScrollPos(currentScrollPos); // Actualizamos la posición del scroll
// //     };

// //     useEffect(() => {
// //         window.addEventListener('scroll', handleScroll); // Escuchamos el evento de scroll
// //         return () => {
// //             window.removeEventListener('scroll', handleScroll); // Limpiamos el evento cuando el componente se desmonte
// //         };
// //     }, [prevScrollPos]);

// //     return (
// //         <Navbar
// //             className={`navbar-container ${scrollingDown ? 'navbar-hide' : 'navbar-show'}`}
// //             expand="lg"
// //         >
// //             <Container fluid>
// //                 <div className="d-flex align-items-center">
// //                     {/* <Navbar.Brand>
// //                         <Link to="/" className="navbar-logo">ERNO</Link>
// //                     </Navbar.Brand> */}
// //                 </div>
// //                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //                 <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse">
// //                     <Nav className="navbar-nav">
// //                         {user ? (
// //                             <>
// //                                 <Link to="/" className="navbar-logo">ERNO</Link>
// //                                 <br></br>
// //                                 <Nav.Link as={Link} to="/Collections" className="nav-item">Collections</Nav.Link>
// //                                 <Nav.Link as={Link} to="/profile" className="nav-item">Profile</Nav.Link>
// //                                 <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
// //                                 <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
// //                             </>
// //                         ) : (
// //                             <>
// //                                 <Link to="/" className="navbar-logo">ERNO</Link>
// //                                 <br></br>
// //                                 <Nav.Link as={Link} to="/Collections" className="nav-item">Collections</Nav.Link>
// //                                 <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
// //                                 <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
// //                             </>
// //                         )}
// //                     </Nav>
// //                 </Navbar.Collapse>
// //             </Container>
// //         </Navbar>
// //     );
// // }

// // export default Navigation;


// import React, { useState, useEffect, useContext } from 'react';
// import './Navigation.css';
// import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { AuthContext } from '../../context/auth.context';

// function Navigation() {
//     const { user, logout } = useContext(AuthContext);
//     const [scrollingDown, setScrollingDown] = useState(false);
//     const [prevScrollPos, setPrevScrollPos] = useState(0);

//     const handleScroll = () => {
//         const currentScrollPos = window.scrollY;
//         if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
//             setScrollingDown(true);
//         } else if (currentScrollPos < prevScrollPos) {
//             setScrollingDown(false);
//         }
//         setPrevScrollPos(currentScrollPos);
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [prevScrollPos]);

//     return (
//         <Navbar
//             className={`navbar-container ${scrollingDown ? 'navbar-hide' : 'navbar-show'}`}
//             expand="lg"
//         >
//             <Container fluid>
//                 <div className="d-flex align-items-center justify-content-start">
//                     {/* Logo ERNO con salto de línea */}
//                     <Link to="/" className="navbar-logo">
//                         <strong>ERNO</strong>
//                     </Link>
//                     <br />
//                 </div>

//                 <div>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse">
//                         <Nav className="navbar-nav">
//                             {user ? (
//                                 <>
//                                     <Nav.Link as={Link} to="/Collections" className="nav-item">Collections</Nav.Link>
//                                     <Nav.Link as={Link} to="/profile" className="nav-item">Profile</Nav.Link>
//                                     <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
//                                     <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
//                                 </>
//                             ) : (
//                                 <>
//                                     <Nav.Link as={Link} to="/Collections" className="nav-item">Collections</Nav.Link>
//                                     <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
//                                     <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
//                                 </>
//                             )}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </div>
//             </Container>
//         </Navbar >
//     );
// }

// export default Navigation;

import React, { useState, useEffect, useContext } from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { AuthContext } from '../../context/auth.context';

function Navigation() {
    const { user, logout } = useContext(AuthContext);
    const [scrollingDown, setScrollingDown] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
            setScrollingDown(true);
        } else if (currentScrollPos < prevScrollPos) {
            setScrollingDown(false);
        }
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`navbar-container ${scrollingDown ? 'navbar-hide' : 'navbar-show'}`}>
            <Container fluid className="navbar-content">

                <nav className="navbar-links">
                    {user ? (
                        <>
                            <div className="navbar-row">
                                <h1 className="nav-item"><Link to="/">ERNO</Link></h1>
                                <h1 className="nav-separator"> | </h1>
                                <h1 className="nav-item"><Link to="/Collections">Collections</Link></h1>
                                <h1 className="nav-separator"> | </h1>
                                <h1 className="nav-item"><Link to="/profile">Profile</Link></h1>
                                <h1 className="nav-separator"> | </h1>
                                <h1 className="nav-item"><Link to="/about">About</Link></h1>
                                <h1 className="nav-separator"> | </h1>
                                <h1 className="nav-item"><Link to="/contact">Contact</Link></h1>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="navbar-row">
                                <h1 className="nav-item"><Link to="/">ERNO</Link></h1>
                                <h1 className="nav-separator"> | </h1>
                                <h1 className="nav-item"><Link to="/Collections">Collections</Link></h1>
                                <h1 className="nav-separator"> | </h1>
                                <h1 className="nav-item"><Link to="/about">About</Link></h1>
                                <h1 className="nav-separator"> | </h1>
                                <h1 className="nav-item"><Link to="/contact">Contact</Link></h1>
                            </div>
                        </>
                    )}
                </nav>
            </Container>
        </div>
    );
}

export default Navigation;