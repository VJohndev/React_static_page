// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li className='link'><NavLink activeClassName="selected" className="nav-link" exact to="/Home">Home</NavLink></li>
        <li className='link'><NavLink activeClassName="selected" className="nav-link" to="/Gallery">Gallery</NavLink></li>
        <li className='link'><NavLink activeClassName="selected" className="nav-link" to="/About">About</NavLink></li>
        <li className='link'><NavLink activeClassName="selected" className="nav-link" to="/Contact">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
