import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Header.css";
const Header = () => {
  return (
    <header className='py-3 bg-secondary'>
      <nav className="container">
        <ul className="nav ">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/transaction">Transaction</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/debts">Debts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header