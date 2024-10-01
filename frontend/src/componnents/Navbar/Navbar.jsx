import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import logo from '../Assets/CVReformatter.png';
import {link} from 'react-router-dom';
import About from '../About/About'
import ContactUs from '../ContactUs/ContactUs'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Signup from '../Signup/Signup'
import './navbar.css'
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo}  className="nav-logo" />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/" className={isActive('/')}>Home</Link>
        </li>
        <li>
          <Link to="/About" className={isActive('/About')}>About</Link>
        </li>
        <li>
          <Link to="/ContactUs" className={isActive('/ContactUs')}>Contact Us</Link>
        </li>
        <li>
          <Link to="/login" className={isActive('/login')}>Login</Link>
        </li>
        <li>
          <Link to="/signup" style={{color: 'white'}} className={`signup-btn ${isActive('/signup')}`  }>Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
