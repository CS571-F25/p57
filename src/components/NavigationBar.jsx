import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar} from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';


import LoginForm from "./LoginDrop";




function NavigationBar() {
    return (
        <Navbar bg='dark' variant='dark' fixed='top'>
            
            <Navbar.Brand as={Link} to="/">PlayForum</Navbar.Brand>
                <Nav className='ml-auto'>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    <Nav.Link as={Link} to='/games'>Games</Nav.Link>
                    <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
                    <Nav.Link as={Link} to='/favorites'>Favorites</Nav.Link>
                    <Dropdown align="end">
                        <Dropdown.Toggle as={Nav.Link}>
                            Login
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ padding: '15px', minWidth: '250px' }}>
                            <LoginForm />
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                
        </Navbar>
    )
}

export default NavigationBar;