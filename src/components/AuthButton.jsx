import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function AuthButton() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error('Sign out error', err);
    }
  };

  // If user is present on `auth.currentUser`, show sign out, otherwise a login link
  const user = auth.currentUser;

  if (user) {
    return (
      <Button variant="outline-light" onClick={handleSignOut}>Sign out</Button>
    );
  }

  return (
    <Nav.Link href="#/login">Login</Nav.Link>
  );
}
