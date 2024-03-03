import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMehBlank, faSadTear, faAngry } from '@fortawesome/free-regular-svg-icons';
import './index.css';

const EmojiBar = ({ onEmotionSelect }) => {
    // State to hold the currently selected emotion
    const [selectedEmotion, setSelectedEmotion] = useState(null);

    // Effect to initialize the selected emotion from localStorage
    useEffect(() => {
        const storedEmotion = localStorage.getItem('selectedEmotion');
        if (storedEmotion) {
            setSelectedEmotion(storedEmotion);
        }
    }, []);

    // Function to handle emotion selection
    const handleEmotionSelect = (emotion) => {
        setSelectedEmotion(emotion); // Update the selected emotion in state

        // Remove previously stored emotion
        localStorage.removeItem('selectedEmotion');

        // Store the selected emotion in localStorage
        localStorage.setItem('selectedEmotion', emotion);

        onEmotionSelect(emotion); // Pass the selected emotion to the parent component
    };


    return (
        <>
            <h5>How are you feeling today?</h5>
            <div className="feelingContainer">
                <div className="emojiContainer">
                    <div className="emojis-row">
                        <div className={`emojis ${selectedEmotion === 'good' ? 'selected' : ''}`} onClick={() => handleEmotionSelect('good')}>
                            Good <br /> <FontAwesomeIcon icon={faSmile} size="2x" />
                        </div>
                        <div className={`emojis ${selectedEmotion === 'neutral' ? 'selected' : ''}`} onClick={() => handleEmotionSelect('neutral')}>
                            Neutral <br /> <FontAwesomeIcon icon={faMehBlank} size="2x" />
                        </div>
                        <div className={`emojis ${selectedEmotion === 'low' ? 'selected' : ''}`} onClick={() => handleEmotionSelect('low')}>
                            Low <br /> <FontAwesomeIcon icon={faSadTear} size="2x" />
                        </div>
                        <div className={`emojis ${selectedEmotion === 'frustrated' ? 'selected' : ''}`} onClick={() => handleEmotionSelect('frustrated')}>
                            Frustrated <br /> <FontAwesomeIcon icon={faAngry} size="2x" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmojiBar;
