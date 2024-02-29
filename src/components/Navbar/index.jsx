import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'

function JournalNavbar() {
    return (
        <Navbar expand="lg" className="customNav">
            <Container>
                <Navbar.Brand id="navTitle" href="/">
                    {/* logo here */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="navLink" href="/">login</Nav.Link>
                        <Nav.Link className="navLink" href="/">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default JournalNavbar