import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const toggleMenuOpen = () => document.body.classList.toggle("open");

  return (
    <div className='navbar'>
      <div
        className='navbar-overlay'
        onClick={toggleMenuOpen}></div>
      <button
        type='button'
        className='navabar-burger'
        onClick={toggleMenuOpen}
      >
        <span className='material-icons'>Menu</span>
      </button>
      <h1 className='navbar-title'>Post.it</h1>
      <nav className='navbar-menu'>
        <button type='button'>Skills</button>
        <button type='button'>Awards</button>
        <button type='button'>Projects</button>
      </nav>
    </div>
  )
}

export default Navbar;
