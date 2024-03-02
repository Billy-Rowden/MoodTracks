import React from 'react';
import JournalEntryForm from '../JournalEntry';


import './index.css';

function Journal() {
    return (
        <>
        <div className="journal-container">
            <h2>Journal</h2>
            <JournalEntryForm className="journal-entry-form" />
        </div>
        </>
    );
}

export default Journal;
