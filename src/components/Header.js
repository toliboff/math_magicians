import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Math Magicians</h1>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
