import React, { useState, useEffect } from 'react';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';
import YoutubePlayer from '../YouTubePlayer';
import RandomAffirmation from '../Affirmations/RandomAffirmation';
import './index.css';

function Journal() {
    // const location = useLocation();
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
        if (selectedDate) {
            const storedEmotion = localStorage.getItem(`selectedEmotion_${selectedDate.toDateString()}`);
            if (storedEmotion) {
                setSelectedEmotion(storedEmotion);
            } else {
                setSelectedEmotion(null);
            }
        }
    }, [selectedDate]);

    useEffect(() => {
        // Retrieve firstName from localStorage if available
        const storedFirstName = localStorage.getItem('loggedInUser');
        if (storedFirstName) {
            const { firstName } = JSON.parse(storedFirstName);
            setFirstName(firstName);
        }
    }, []);

    const handleEmotionSelect = (emotion) => {
        setSelectedEmotion(emotion);
        // Save selected emotion to localStorage for the selected date
        if (selectedDate) {
            localStorage.setItem(`selectedEmotion_${selectedDate.toDateString()}`, emotion);
        }
    };

    const handleSaveEntry = (journalEntry) => {
        // Save journal entry to localStorage specific to the selected date
        if (selectedDate) {
            localStorage.setItem(`journalEntry_${selectedDate.toDateString()}`, journalEntry);
        }
    };


    return (
        <>
            <div className="journal-container">
                {selectedDate && (
                    <>
                        <h2 className='date'>Today is {selectedDate.toLocaleDateString()}</h2>
                        <h3 className='hi'>Hi there, {firstName}</h3>
                        <h5><RandomAffirmation /></h5>
                        <EmojiBar onEmotionSelect={handleEmotionSelect} />
                        {selectedEmotion && <YoutubePlayer emotion={selectedEmotion} />}
                        <JournalEntryForm
                            selectedEmotion={selectedEmotion}
                            selectedDate={selectedDate}
                            onSaveEntry={handleSaveEntry}
                            className="journal-entry-form"
                        />
                    </>
                )}
            </div>
        </>
    );
}

export default Journal;
