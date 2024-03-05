import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './index.css';

function JournalFooter() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
        <Nav className="justify-content-center footer">
          <Nav.Item>
            <Container className="footer-text">© MoodTracks, 2024</Container>
          </Nav.Item>
          <Nav.Item>
            <Button variant="primary" className="footer-button" onClick={scrollToTop}>Top</Button>
          </Nav.Item>
        </Nav>
      </>
        // <Container className="footer">
        //     <Container className="footer-body">
        //         <Container className="footer-text">© MoodTracks, 2024</Container>
        //         <Button variant="primary" className="footer-button" onClick={scrollToTop}>Top</Button>
        //     </Container>
        // </Container>
    );
}

export default JournalFooter;
