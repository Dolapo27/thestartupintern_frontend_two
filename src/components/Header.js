import React from 'react'
import "../styles/Header.css"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='navbar'>
            <label className='logo'>Eventful Moments</label>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/Sixthpage">Register</Link></li>
            </ul>
        </nav>
    )
}

export default Header
