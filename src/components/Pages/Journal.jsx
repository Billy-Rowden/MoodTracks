import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';
import YoutubePlayer from '../YouTubePlayer';
import './index.css';

function Journal() {
    const location = useLocation();
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        // Retrieve firstName from localStorage if available
        const storedFirstName = localStorage.getItem('loggedInUser');
        if (storedFirstName) {
            const { firstName } = JSON.parse(storedFirstName);
            setFirstName(firstName);
        }
    }, []);

    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        // Retrieve selected emotion from localStorage
        const storedEmotion = localStorage.getItem('selectedEmotion');
        if (storedEmotion) {
            setSelectedEmotion(storedEmotion);
        }
    }, []);

    // Define handleEmotionSelect function to handle emotion selection
    const handleEmotionSelect = (emotion) => {
        console.log('Selected emotion:', emotion);
        setSelectedEmotion(emotion);
        localStorage.setItem('selectedEmotion', emotion);
    };

    return (
        <>
            <div className="journal-container">
                <h3>{selectedDate}</h3>
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
