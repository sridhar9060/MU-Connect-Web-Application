import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MUlogo from '../images/MUlogo.png'


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img className="mainlogo" src={MUlogo}></img>
          CONNECT 
         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {/* <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li> */}
          <li className='nav-item'>
            <Link
              to='/news'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              News
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/editor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Editor
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/mentor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Mentor
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
