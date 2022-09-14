import React from 'react';
import logo from '../image/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
    <img src={logo} alt="" />
    <nav>
        <a href="/shop">Shop</a>
        <a href="/order">Order review</a>
        <a href="/inventory">Manage inventory</a>
    </nav>
    </div>
  );
}

export default Header;
