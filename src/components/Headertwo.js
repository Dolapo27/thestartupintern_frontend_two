import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
            <nav className='navbar'>
                <label className='logo'>Eventful Moments</label>
                <ul>
                    <li><Link to="/">LogOut</Link></li>
                    <li><Link to="/Secondpage">My Bucket</Link></li>
                </ul>
            </nav>
        
        
    )
}

export default Header
