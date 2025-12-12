import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import AuthButton from './AuthButton';

function NavigationBar() {
    return (
        <Navbar bg='dark' variant='dark' fixed='top'>

            <Nav className='mx-auto nav-center align-items-center'>
                <Navbar.Brand as={Link} to="/" className="me-3">PlayForum</Navbar.Brand>

                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                <Nav.Link as={Link} to='/games'>Games</Nav.Link>
                <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
                <Nav.Link as={Link} to='/favorites'>Favorites</Nav.Link>

                <AuthButton />
            </Nav>

        </Navbar>
    )
}

export default NavigationBar;