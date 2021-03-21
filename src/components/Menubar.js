import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Menubar.css';
import { MdAccountCircle } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Menubar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return (
      window.removeEventListener('resize', showButton)
    );
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar2'>
          <div className='navbar2-container container'>
            <Link to='/' className='navbar2-logo' onClick={closeMobileMenu}>
              <MdAccountCircle className='navbar2-icon' />
              DumbPros
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav2-menu active' : 'nav2-menu'}>
              <li className='nav2-item'>
                <Link to='/' className='nav2-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav2-item'>
                <Link
                  to='/database'
                  className='nav2-links'
                  onClick={closeMobileMenu}
                >
                  Database
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Menubar;