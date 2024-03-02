import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import mainLogo from '../../assets/images/mainLogo.png'; // Import the image file
import './index.css';

function JournalNavbar() {
    return (
        <Navbar expand="lg" className="customNav">
            <Navbar.Brand id="navTitle" href="/">
                <img src={mainLogo} alt="Main Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="navLink" href="/">Login</Nav.Link>
                    <Nav.Link className="navLink" href="/journal">Journal</Nav.Link>
                    <Nav.Link className="navLink" href="/contact">Contact</Nav.Link>
                    <Nav.Link className="navLink" href="/socials">Socials</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default JournalNavbar;
