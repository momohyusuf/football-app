import React from 'react';

import { NavLink } from 'react-router-dom';
import image from '../logo.png';

function Navbar() {
  return (
    <nav className="nav--bar">
      {' '}
      <div>
        <p>Football O'clock</p>
        <img src={image} alt="logo" className="logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="news">News</NavLink>
        </li>
        <li>
          <NavLink to="leagues">Leagues</NavLink>
        </li>
        <li>
          <NavLink to="Fixtures">Fixtures</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
