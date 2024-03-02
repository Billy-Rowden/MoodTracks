import React from 'react';
import { useLocation } from 'react-router-dom';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';
import './index.css';

function Journal() {
    const location = useLocation();
    const firstName = location.state ? location.state.firstName : '';

    return (
        <>
            <div className="journal-container">
                <h2>Hi there, {firstName}</h2>
                <h2>Daily Affirmation API here</h2>
                <EmojiBar />
                <JournalEntryForm className="journal-entry-form" />
            </div>
        </>
    );
}

export default Journal;
