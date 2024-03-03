import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';
import './index.css';

function Journal() {
    const location = useLocation();
    const firstName = location.state ? location.state.firstName : '';
    const [selectedEmotion, setSelectedEmotion] = useState(null);

    // Define handleEmotionSelect function to handle emotion selection
    const handleEmotionSelect = (emotion) => {
        console.log('Selected emotion:', emotion);
        setSelectedEmotion(emotion); // Set the selected emotion state
        localStorage.setItem('selectedEmotion', emotion);
    };

    return (
        <>
            <div className="journal-container">
                <h2>Hi there, {firstName}</h2>
                <h2>Daily Affirmation API here</h2>
                {/* Pass handleEmotionSelect function as a prop to EmojiBar */}
                <EmojiBar onEmotionSelect={handleEmotionSelect} />
                {/* Pass the selectedEmotion state to JournalEntryForm */}
                <JournalEntryForm selectedEmotion={selectedEmotion} className="journal-entry-form" />
            </div>
        </>
    );
}

export default Journal;
