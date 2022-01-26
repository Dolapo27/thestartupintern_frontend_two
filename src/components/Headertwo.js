import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
            <nav className='navbar'>
                <label className='logo'>Eventful Moments</label>
                <ul>
                    <li><NavLink className="main-nav" to="/">LogOut</NavLink></li>
                    <li><NavLink className="main-nav" to="/Secondpage">My Bucket</NavLink></li>
                </ul>
            </nav>
        
        
    )
}

export default Header
