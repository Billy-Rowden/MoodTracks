import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import Calendar from '../Calendar';
import mainLogo from '../../assets/images/mainLogo.png';
import './index.css';

function Login() {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const navigate = useNavigate();

    const handleFirstNameChange = (event) => {
        const nameRegex = /^[a-zA-Z\s]*$/; // Regex to allow only alphabets and spaces
        if (nameRegex.test(event.target.value) || event.target.value === '') {
            setFirstName(event.target.value);
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Regex for password criteria

        if (firstName.trim() !== '' && passwordRegex.test(password)) {
            localStorage.setItem('loggedInUser', JSON.stringify({ firstName, password }));
            setLoggedIn(true);
            setFirstName('');
            setPassword('');
        } else {
            setShowPasswordModal(true); // Show the password modal if criteria not met
        }
    };

    const handleGoToJournal = () => {
        if (selectedDate) {
            navigate('/journal', { state: { firstName } });
        } else {
            setShowPasswordModal(true); // Show the modal if date is not selected
        }
    };

    const handleLogoClick = () => {
        handleNewUser(); // Perform the same function as clicking "New User" button
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <Link to="/" className="logo-link" onClick={handleLogoClick}>
                <img src={mainLogo} alt="mainLogo" className="mainLogo" />
            </Link>
            <Container className="login-container">
                <div className="loginPage">
                    {!loggedIn && (
                        <div className="login-form">
                            <Form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        style={{ width: '20em', height: '2.5em', borderRadius: '5px' }}
                                    />
                                </div>
                                <div className="input-group">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        style={{ width: '20em', height: '2.5em', borderRadius: '5px' }}
                                    />
                                </div>
                                <Button
                                    variant=""
                                    type="submit"
                                    className="loginButton"
                                    style={{
                                        width: '10em',
                                        height: '2.5em',
                                        borderRadius: '5px',
                                        color: '#e3e9ff',
                                        marginTop: '1.5em',
                                    }}
                                >
                                    Login
                                </Button>
                            </Form>
                        </div>
                    )}
                    {loggedIn && (
                        <div className="calendar-container">
                            <Calendar className="calendar" onSelect={handleDateSelect} />
                            <Button className="gotoJournalButton" onClick={handleGoToJournal}>
                                Go to Journal
                            </Button>
                        </div>
                    )}
                </div>
            </Container>
            {/* Password Criteria Modal */}
            <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedDate ? 'Password Criteria' : 'Date Selection'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedDate ? (
                        <p>Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.</p>
                    ) : (
                        <p>Please select a date before proceeding to your journal.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;
