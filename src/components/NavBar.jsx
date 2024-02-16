import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>All</Link>
            <Link to='/FullStackDev'>Full Stack Development</Link>
            <Link to='/DataScience'>Data Science</Link>
            <Link to='/CyberSecurity'>Cyber Security</Link>
            <Link to='/Career'>Career</Link>
        </div>
    );
};

export default NavBar;