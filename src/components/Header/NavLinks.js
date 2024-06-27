import React from 'react';
import { Link } from 'react-scroll';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <nav>
      <Link to="currency-converter" smooth={true} duration={500}>
        <button type="button" className="link-button">
          Currency Converter
        </button>
      </Link>
    </nav>
  );
};

export default NavLinks;