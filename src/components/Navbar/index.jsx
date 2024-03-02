import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.css';

function JournalNavbar() {
    return (
        <Navbar expand="lg" className="customNav">
            <Navbar.Brand id="navTitle" href="/">Our Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="navLink" href="/login">login</Nav.Link>
                    <Nav.Link className="navLink" href="/journal">journal</Nav.Link>
                    <Nav.Link className="navLink" href="/contact">contact</Nav.Link>
                    <Nav.Link className="navLink" href="/socials">socials</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default JournalNavbar;
