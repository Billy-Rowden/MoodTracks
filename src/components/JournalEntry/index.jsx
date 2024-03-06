import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMehBlank, faSadTear, faAngry } from '@fortawesome/free-regular-svg-icons';
import './index.css';

function JournalEntryForm({ selectedEmotion }) {
    const [journalEntry, setJournalEntry] = useState('');

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

    useEffect(() => {
        // Retrieve saved journal entry and selected emotion from localStorage
        const savedData = localStorage.getItem('journalEntry');
        if (savedData) {
            const { journalEntry, selectedEmotion } = JSON.parse(savedData);
            setJournalEntry(journalEntry);
            selectedEmotion(selectedEmotion);
        }
    }, []);

    const handleSaveEntry = () => {
        // Save journal entry to localStorage
        const entryData = {
            journalEntry: journalEntry,
            selectedEmotion: selectedEmotion
        };
        localStorage.setItem('journalEntry', JSON.stringify(entryData));
    };

    const handleClearEntry = () => {
        // Clear the journal entry textarea
        setJournalEntry('');
        localStorage.removeItem('journalEntry');
    };

    return (
        <Container>
            <div className="journal-text-entry-container">
                <div className="emotion-icon">
                    {getEmotionIcon()}
                    <textarea
                        className="journal-text-entry"
                        placeholder="Write your journal entry here..."
                        value={journalEntry}
                        onChange={(e) => setJournalEntry(e.target.value)}
                    />
                </div>
                <div className='entryButtons-container'>
                    <Button variant="" className='save-btn' onClick={handleSaveEntry}>Save Entry</Button>
                    <Button variant="" className='clear-btn' onClick={handleClearEntry}>Clear Entry</Button>
                </div>
            </div>
        </Container>
    );
}

export default JournalEntryForm;
