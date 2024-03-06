import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';
import YoutubePlayer from '../YouTubePlayer';
import './index.css';

function Journal() {
    const location = useLocation();
    const [firstName, setFirstName] = useState('');
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        // Retrieve selected date from localStorage or component state
        const storedDate = localStorage.getItem('selectedDate');
        if (storedDate) {
            setSelectedDate(new Date(storedDate));
        }
    }, []);

    useEffect(() => {
        // Retrieve selected emotion from localStorage
        const storedEmotion = localStorage.getItem('selectedEmotion');
        if (storedEmotion) {
            setSelectedEmotion(storedEmotion);
        }
    }, []);

    useEffect(() => {
        // Retrieve firstName from localStorage if available
        const storedFirstName = localStorage.getItem('loggedInUser');
        if (storedFirstName) {
            const { firstName } = JSON.parse(storedFirstName);
            setFirstName(firstName);
        }
    }, []);

    useEffect(() => {
        // Retrieve journal entry from localStorage for the selected date
        if (selectedDate) {
            const journalEntry = localStorage.getItem(selectedDate.toDateString()); // Assuming you store journal entry with the date string as the key
            if (journalEntry) {
                // Set the selected emotion if found in localStorage
                const { emotion } = JSON.parse(journalEntry);
                setSelectedEmotion(emotion);
            }
        }
    }, [selectedDate]);

    const handleEmotionSelect = (emotion) => {
        setSelectedEmotion(emotion);
        // Save selected emotion to localStorage
        localStorage.setItem(selectedDate.toDateString(), JSON.stringify({ emotion }));
    };

    return (
        <>
            <div className="journal-container">
                {selectedDate && (
                    <>
                        <h3>Today is {selectedDate.toLocaleDateString()}</h3>
                        <h2>Hi there, {firstName}</h2>
                        <h2>Daily Affirmation API here</h2>
                        <EmojiBar onEmotionSelect={handleEmotionSelect} />
                        {selectedEmotion && <YoutubePlayer emotion={selectedEmotion} />}
                        <JournalEntryForm selectedEmotion={selectedEmotion} className="journal-entry-form" />
                    </>
                )}
            </div>
        </>
    );
}

export default Journal;
