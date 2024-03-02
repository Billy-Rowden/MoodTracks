// EmojiBar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMehBlank, faSadTear, faAngry } from '@fortawesome/free-regular-svg-icons';
import './EmojiBar.css';

const EmojiBar = ({ onEmotionSelect }) => {
    return (
        <div className="feelingContainer">
            <h5> !! affirmations go above this!! </h5>
            <h5> how are you feeling today? </h5>
            <div className="emojiContainer">
                <div className="emojis" onClick={() => onEmotionSelect('good')}>
                    Good <br /> <FontAwesomeIcon icon={faSmile} />
                </div>
                <div className="emojis" onClick={() => onEmotionSelect('neutral')}>
                    Neutral <br /> <FontAwesomeIcon icon={faMehBlank} />
                </div>
                <div className="emojis" onClick={() => onEmotionSelect('low')}>
                    Low <br /> <FontAwesomeIcon icon={faSadTear} />
                </div>
                <div className="emojis" onClick={() => onEmotionSelect('frustrated')}>
                    Frustrated <br /> <FontAwesomeIcon icon={faAngry} />
                </div>
            </div>
        </div>
    );
};

export default EmojiBar;
