import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '8e3c5e197d0848edb1aa1d706f26fd97';

const SpotifyPlaylists = ({ emotion }) => {
    const [accessToken, setAccessToken] = useState('');
    const [playlist, setPlaylist] = useState(null);
    const [error, setError] = useState('');
};

useEffect(() => {
    // Function to extract access token from URL fragment
    const getAccessTokenFromUrl = () => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        return params.get('access_token');
    };

    // Check if access token exists in URL fragment
    const token = getAccessTokenFromUrl();
    if (token) {
        setAccessToken(token);
    } else {
        // Redirect user to Spotify authorization page
        const redirectUri = encodeURIComponent(window.location.origin);
        window.location = `https://accounts.spotify.com/authorize?client_id=${apiKey}&response_type=token&redirect_uri=${redirectUri}&scope=playlist-read-private`;
    }
}, []);

useEffect(() => {
    console.log('accessToken:', accessToken);
    console.log('emotion:', emotion);
    if (accessToken && emotion) {
        // Define query based on emotion
        let query = '';
        switch (emotion) {
            case 'good':
                query = 'chill instrumentals uplifting';
                break;
            case 'neutral':
                query = 'neutral instrumentals';
                break;
            case 'low':
                query = 'sad lofi instrumental';
                break;
            case 'frustrated':
                query = 'meditation instrumental';
                break;
            default:
                console.error('Invalid emotion:', emotion);
                return;
        }
        // perform operation with query
    }
});

        

