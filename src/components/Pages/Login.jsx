import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from '../Calendar';
import './index.css';

function Login() {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status
    const location = useLocation();

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log("First Name:", firstName);
        console.log("Password:", password);
        // Simulating successful login
        setLoggedIn(true);
    };

    return (
        <Container className="login-container">
            <div className="loginPage">
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            style={{ width: '15em', height: '2em' }}
                        />
                    </div>

                    <div className="input-group">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            style={{ width: '15em', height: '2em' }}
                        />
                    </div>

                    <Button variant="primary" type="submit" className="loginButton">
                        Login
                    </Button>
                </Form>
            </div>
            <div className="calendar-container">
                {loggedIn && <Calendar className="calendar" />}
            </div>
            </div>
        </Container>
    );
}

export default Login;
