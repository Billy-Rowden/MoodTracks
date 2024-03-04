import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMehBlank, faSadTear, faAngry } from '@fortawesome/free-regular-svg-icons';
import './index.css';

function JournalEntryForm({ selectedEmotion }) {
    const getEmotionIcon = () => {
        switch (selectedEmotion) {
            case 'good':
                return <FontAwesomeIcon icon={faSmile} size="2x" />;
            case 'neutral':
                return <FontAwesomeIcon icon={faMehBlank} size="2x" />;
            case 'low':
                return <FontAwesomeIcon icon={faSadTear} size="2x" />;
            case 'frustrated':
                return <FontAwesomeIcon icon={faAngry} size="2x" />;
            default:
                return null;
        }
    };

    return (
        <Container>
            <div className="journal-text-entry-container">
                <div className="emotion-icon">
                    {getEmotionIcon()}
                <textarea className="journal-text-entry" placeholder="Write your journal entry here...">
                    
                </textarea>
                </div>
                <Button variant="primary">Save Entry</Button>
                <Button variant="secondary">Clear Entry</Button>
            </div>
        </Container>
    );
}

export default JournalEntryForm;
