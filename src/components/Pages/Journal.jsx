import React from 'react';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';

function Journal() {
    const handleEntrySubmit = (entryData) => {
        // Handle the submission of the journal entry data (e.g., save to database)
        console.log('Journal Entry Submitted:', entryData);
    };

    return (
        <div>
            <h2>Journal Entry</h2>
            <EmojiBar /> 
            <JournalEntryForm onSubmit={handleEntrySubmit} />
        </div>
    );
}

export default Journal;
