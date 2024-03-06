import React, { useState } from 'react';
import affirmations from './affirmations.json';

const RandomAffirmation = () => {
    const [randomAffirmation, setRandomAffirmation] = useState(getRandomAffirmation());

    function getRandomAffirmation() {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        return affirmations[randomIndex];
    }

    return (
        <div className="affirmation-container">
            <div className="affirmation-text">
                <p>"{randomAffirmation.text}"</p>
                <p>- {randomAffirmation.author}</p>
            </div>
        </div>
    );
};

export default RandomAffirmation;
