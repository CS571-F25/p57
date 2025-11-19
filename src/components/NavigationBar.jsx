import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar} from 'react-bootstrap';




function NavigationBar() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
            <Navbar.Brand as={Link} to="/">PlayForum</Navbar.Brand>
                <Nav className='ml-auto'>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    <Nav.Link as={Link} to='/games'>Games</Nav.Link>
                    <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
                    <Nav.Link as={Link} to='/favorites'>Favorites</Nav.Link>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                </Nav>
                </Container>
        </Navbar>
    )
}

export default Navbar;