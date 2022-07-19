import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                <ul className='nav-menu'>
                  <li className='nav-item'>
                    <a className='nav-links' href='/'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-links' href='/members'>
                      Member
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-links' href='/login'>
                      Login
                    </a>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar