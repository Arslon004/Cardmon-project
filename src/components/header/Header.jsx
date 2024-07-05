import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/close.svg";

import "./Header.css";

const Header = () => {

  const [isMenuOpen,setIsMenuOpen]=useState(false);

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className='py-4 bg-secondary'>
      <nav className="container">
        <ul className="nav navbar--box">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/transaction">Transaction</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/debts" >Debts</NavLink>
          </li>
        </ul>
        <button className='hamburger' onClick={toggleMenu} >
          <img src={menu} alt="menu" />
        </button>
      </nav>
      <nav className={`nav navbar__responsive ${isMenuOpen ? "open" : ""}`}>
        <ul className="res-nav-list">
          <li className="nav__item--responsive">
            <NavLink className="nav-link--responsive text-info" to="/home" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li className="nav__item--responsive">
            <NavLink className="nav-link--responsive text-info" to="/transaction" onClick={toggleMenu}>Transaction</NavLink>
          </li>
          <li className="nav__item--responsive">
            <NavLink className="nav-link--responsive text-info" to="/debts" onClick={toggleMenu}>Debts</NavLink>
          </li>
        </ul>
        <button onClick={toggleMenu}  className='close__btn' >
          <img src={close} alt="close" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
