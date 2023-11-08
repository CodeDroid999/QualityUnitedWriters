import Image from 'next/image'
import QualityUnitedWritersLogo from "public/logo.png"
import React, { useState } from 'react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={`navbar ${showDropdown ? 'mobile' : ''}`}>
      <div className="logo">
      <Image
          src={QualityUnitedWritersLogo}
          alt="features"
          className="h-16 w-30] "
        />
      </div>
      <ul className={`nav-links ${showDropdown ? 'hidden' : ''}`}>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
      <div className="mobile-menu" onClick={toggleDropdown}>
        <div className={`bar ${showDropdown ? 'open' : ''}`}></div>
        <div className={`bar ${showDropdown ? 'open' : ''}`}></div>
        <div className={`bar ${showDropdown ? 'open' : ''}`}></div>
      </div>
      {showDropdown && (
        <div className="mobile-dropdown">
          <ul>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
