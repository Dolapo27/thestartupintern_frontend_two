import React from 'react'
import "../styles/Header.css"
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav className='navbar'>
            <label className='logo'>Eventful Moments</label>
            <ul>
                <li><NavLink className="main-nav" to="/">Login</NavLink></li>
                <li><NavLink className="main-nav" to="/Sixthpage">Register</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header
