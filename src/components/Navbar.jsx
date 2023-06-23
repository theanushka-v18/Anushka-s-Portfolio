import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='nav-links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/skills'>Skills</NavLink>
                <NavLink to='/certificates'>Certificates</NavLink>
            </div>
            <div className='theme-btn'>
                theme button
            </div>
        </div>
    )
}

export default Navbar
