import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <ul className='nav'>
        <li className='nav-item'>
          <a href='#about'>About</a>
        </li>
        <li className='nav-item'>
          <a href='#projects'>Projects</a>
        </li>
        <li className='nav-item'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
