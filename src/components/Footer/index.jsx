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
        <div className="footer">
            <div className="footer-body">
                <p className="footer-text">© MoodTracks, 2024</p>
                <Button className="footer-button" onClick={scrollToTop}>Top</Button>
            </div>
        </div>
    );
}

export default JournalFooter;
