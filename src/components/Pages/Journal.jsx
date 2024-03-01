import React from 'react';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';
import './index.css'; // Import the CSS file

function Journal() {
    return (
        <div className="journal-container">
            <h2>Journal</h2>
            <EmojiBar className="emoji-bar" />
            <JournalEntryForm className="journal-entry-form" />
        </div>
    );
}

export default Journal;
