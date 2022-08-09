import React from 'react';
import logo from '../img/cat_logo.svg';

function Header() {
  return (
    <div className="header">
      <div className="Header-logo">
        <img className="Logo" src={logo} alt="logo" />
        <p className="Logo-title">TESTTASK</p>
      </div>
      <div className="Header-nav">
        <button type="button" className="Header-nav-usrs">users</button>
        <button type="button" className="Header-nav-sgnup">sign up</button>
      </div>
    </div>
  );
}
export default Header;
