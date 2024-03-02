import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css';

function JournalFooter() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Card className="footer">
            <Card.Body className="footer-body">
                <Card.Text className="footer-text">© MoodTracks, 2024</Card.Text>
                <Button variant="primary" className="footer-button" onClick={scrollToTop}>Top</Button>
            </Card.Body>
        </Card>
    );
}

export default JournalFooter;
