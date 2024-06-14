import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <div className='nav-name'>
            Moutaz Jazairi
        </div>
        <div className='nav-links'>
        <Link to="home" smooth={true} duration={300} className="navbar-link">
          Home
        </Link>
        <Link to="about" smooth={true} duration={300} className="navbar-link">
          About
        </Link>
        <Link to="project" smooth={true} duration={300} className="navbar-link">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={300} className="navbar-link">
          Contact
        </Link>
        </div>
        
    </nav>
  )
}

export default Navbar