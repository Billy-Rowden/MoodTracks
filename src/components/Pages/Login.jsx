import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Calendar from '../Calendar';
import JournalNavbar from '../Navbar';
import './index.css';

function Login() {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        navigate('/journal', { state: { firstName } });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName.trim() !== '' && password.trim() !== '') {
            setLoggedIn(true);
            console.log('First Name:', firstName);
            console.log('Password:', password);
        }
    };

    return (
        <Container className="login-container">
            <div className="loginPage">
                <div className="login-form">
                    <Form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <Form.Label>first name</Form.Label>
                            <Form.Control
                                type="text"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                style={{ width: '15em', height: '2em' }}
                            />
                        </div>
                        <div className="input-group">
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                style={{ width: '15em', height: '2em' }}
                            />
                        </div>
                        <Button variant="primary" type="submit" className="loginButton">
                            login
                        </Button>
                    </Form>
                </div>
                <div className="calendar-container">
                    {loggedIn && <Calendar className="calendar" onDateSelect={handleDateSelect} />}
                </div>
                {loggedIn && selectedDate && <JournalNavbar />}
            </div>
        </Container>
    );
}

export default Login;
