import React from 'react';
import { Link } from 'react-scroll';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <nav>
      <Link to="currency-converter-title" smooth={true} duration={500}>
        <button type="button" className="link-button">
          Currency Converter
        </button>
      </Link>
      <Link to="currency-chart" smooth={true} duration={500}>
        <button type="button" className="link-button">
          Exchange Rate Chart
        </button>
      </Link>
    </nav>
  );
};

export default NavLinks;