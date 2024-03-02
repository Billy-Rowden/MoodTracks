import React from 'react';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';
import './index.css';

function Journal() {
    return (
        <>
        <div className="journal-container">
            <h2>Hi there, (your name)</h2>
            <h2>Daily Affirmation API here</h2>
            <EmojiBar/>
            <JournalEntryForm className="journal-entry-form" />
        </div>
        </>
    );
}

export default Journal;
