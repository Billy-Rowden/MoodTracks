import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from '../Navbar'; // Import your existing Navbar component
import './index.css';

function Login() {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();

    console.log("Current path:", location.pathname); // Add this line to check the current path

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
    };

    return (
        <>
            {location.pathname !== '/login' && <Navbar />} {/* Conditionally render the Navbar */}
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        <Link to="/journal" className="text-white">Login</Link>
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default Login;
