import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '8e3c5e197d0848edb1aa1d706f26fd97';

const SpotifyPlaylists = ({ emotion }) => {
    const [accessToken, setAccessToken] = useState('');
    const [playlist, setPlaylist] = useState(null);
    const [error, setError] = useState('');
};