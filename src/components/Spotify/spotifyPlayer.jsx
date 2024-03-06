import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '8e3c5e197d0848edb1aa1d706f26fd97';

const SpotifyPlaylists = ({ emotion }) => {
    const [accessToken, setAccessToken] = useState('');
    const [playlist, setPlaylist] = useState(null);
    const [error, setError] = useState('');

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
        if (accessToken && emotion) {
            // Define query based on emotion
            let query = '';
            switch (emotion) {
                case 'good':
                    query = 'chill%20instrumentals%20uplifting';
                    break;
                case 'neutral':
                    query = 'neutral%20instrumentals';
                    break;
                case 'low':
                    query = 'sad%20lofi%20instrumental';
                    break;
                case 'frustrated':
                    query = 'meditation%20instrumental';
                    break;
                default:
                    console.error('Invalid emotion:', emotion);
                    return;
            }

            // Fetch playlist based on query from Spotify API
            axios.get('https://api.spotify.com/v1/search', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                params: {
                    q: query,
                    type: 'playlist',
                    limit: 1 // limit to 1 result
                }
            })
            .then(response => {
                if (response.data.playlists.items.length > 0) {
                    const playlistId = response.data.playlists.items[0].id;
                    setPlaylist(`https://open.spotify.com/embed/playlist/${playlistId}`);
                } else {
                    setError('No playlist found for the emotion');
                }
            })
            .catch(error => {
                setError('Error fetching playlist');
            });
        }
    }, [accessToken, emotion]);

    return (
        <div>
            {accessToken ? (
                <div>
                    <h2>Spotify Playlists</h2>
                    {playlist ? (
                        <iframe 
                            width="560"
                            height="315"
                            src={playlist}
                            frameBorder="0"
                            title="Playlist Player"
                        ></iframe>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            ) : (
                <div>
                    <p>Redirecting to Spotify authorization page...</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default SpotifyPlaylists;



        

