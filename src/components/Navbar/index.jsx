import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import mainLogo from '../../assets/images/mainLogo.png'; // Import the image file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './index.css';

function JournalNavbar() {
    return (
        <Navbar expand="lg" className="customNav">
            {/* Wrap the logo inside Link tag with the home page URL */}
            <Link to="/" className="navbar-brand" id="navTitle">
                <img src={mainLogo} alt="Main Logo" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="navLink" href="/">Logout</Nav.Link>
                    <Nav.Link className="navLink" href="/journal">Journal</Nav.Link>
                    <Nav.Link className="navLink" href="/contact">Contact</Nav.Link>
                    <Nav.Link className="navLink" href="/socials">Socials</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default JournalNavbar;
