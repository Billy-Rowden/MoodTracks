import React from 'react';
import Container from 'react-bootstrap/Container';
import './index.css';

import profilesData from './profiles.json';

function Contact() {
    return (
        <Container>
            <h1>Contact Page</h1>
            {profilesData.map((profile) => (
                <div key={profile.id} className="profile-card">
                    <img src={profile['profile-picture']} alt={profile.name} className="profile-picture" />
                    <h3>{profile.name}</h3>
                    <p>{profile.introduction}</p>
                    <a href={profile.github} target="_blank">GitHub</a>
                </div>
            ))}
        </Container>
    );
}

export default Contact;
