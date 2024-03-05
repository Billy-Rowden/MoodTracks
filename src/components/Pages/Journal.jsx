import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';
import YoutubePlayer from '../YouTubePlayer'; 
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

        // No need to explicitly check for 'good' emotion here, as it's handled in YoutubePlayer component
    };

    return (
        <>
            <div className="journal-container">
                <h2>Hi there, {firstName}</h2>
                <h2>Daily Affirmation API here</h2>
                <EmojiBar onEmotionSelect={handleEmotionSelect} />
                {selectedEmotion && <YoutubePlayer emotion={selectedEmotion} />}
                <JournalEntryForm selectedEmotion={selectedEmotion} className="journal-entry-form" />
            </div>
        </>
    );
}

export default Journal;
