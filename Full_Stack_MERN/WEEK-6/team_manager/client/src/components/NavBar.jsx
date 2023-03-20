import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {


    return (
        <div className='nav-bar'>
            <Link to={'/players/list'}>Manage Players</Link>
            <Link to={'/status/game'}>Manage Player Status</Link>
        </div>
    )
}

export default NavBar