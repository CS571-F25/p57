import React, { useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Map username to a generated email for Firebase Auth
        const email = `${username}@playforum.local`;

        try {
            if (isRegister) {
                await createUserWithEmailAndPassword(auth, email, password);
                setSuccess('Registered successfully');
                navigate('/favorites');
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                setSuccess('Logged in successfully');
                navigate('/favorites');
            }
            setUsername('');
            setPassword('');
        } catch (err) {
            // Firebase errors include code/messages
            setError(err.message || 'Authentication error');
            console.error(err);
        }
    }

    return (
        <Container className="py-4" style={{ maxWidth: 540 }}>
            <Card>
                <Card.Body>
                    <h1 className="text-center fs-4 mb-3">{isRegister ? 'Sign up' : 'Login'}</h1>

                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}

                    <Form onSubmit={submit}>
                        <Form.Group controlId="formBasicUsername" className="mb-3">
                            <Form.Label className="fw-semibold">Username</Form.Label>
                            <Form.Control
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Enter username"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label className="fw-semibold">Password</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </Form.Group>

                        <div className="d-flex gap-2">
                            <Button variant="primary" type="submit">
                                {isRegister ? 'Sign up' : 'Login'}
                            </Button>
                            <Button variant="secondary" onClick={() => setIsRegister((s) => !s)}>
                                {isRegister ? 'Switch to Login' : 'Switch to Sign up'}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;