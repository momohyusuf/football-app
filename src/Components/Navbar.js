import React from 'react';

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav--bar">
      {' '}
      <p>Sport O'clock</p>
      <ul>
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
