import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JournalEntryForm from '../JournalEntry';
import EmojiBar from '../EmotionBar';
import AuthOptions from '../SpotifyPlayer/Auth';
import './index.css';

function Journal() {
    const location = useLocation();
    const firstName = location.state ? location.state.firstName : '';
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [accessToken, setAccessToken] = useState('');
    const [playlistData, setPlaylistData] = useState(null);

    // Function to load the playlist data when the 'good' emotion is selected
    const loadPlaylist = () => {
        fetch('https://api.spotify.com/v1/playlists/37i9dQZF1EIgG2NEOhqsD7', {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(response => response.json())
            .then(data => {
                setPlaylistData(data);
            })
            .catch(error => {
                console.error('Error fetching playlist:', error);
            });
    };

    // Define handleEmotionSelect function to handle emotion selection
    const handleEmotionSelect = (emotion) => {
        console.log('Selected emotion:', emotion);
        setSelectedEmotion(emotion); // Set the selected emotion state
        localStorage.setItem('selectedEmotion', emotion);

        // If 'good' emotion is selected, load the playlist
        if (emotion === 'good') {
            loadPlaylist();
        }
    };

    useEffect(() => {
        fetch('https://accounts.spotify.com/api/token', AuthOptions)
            .then(response => response.json())
            .then(data => {
                console.log('Access Token:', data.access_token);
                setAccessToken(data.access_token); // Set access token state
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <div className="journal-container">
                <h2>Hi there, {firstName}</h2>
                <h2>Daily Affirmation API here</h2>
                <EmojiBar onEmotionSelect={handleEmotionSelect} />
                <JournalEntryForm selectedEmotion={selectedEmotion} className="journal-entry-form" />
            </div>
        </>
    );
}

export default Journal;