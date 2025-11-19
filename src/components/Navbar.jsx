import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;