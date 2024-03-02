import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMehBlank, faSadTear, faAngry } from '@fortawesome/free-regular-svg-icons';
import './index.css';

const EmojiBar = ({ onEmotionSelect }) => {
    return (
        <>
        <h5>How are you feeling today?</h5>
        <div className="feelingContainer">
            <div className="emojiContainer">
                <div className="emojis-row">
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
        </div>
        </>
    );
};

export default EmojiBar;
