import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="container">
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/transaction">Transaction</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/debts">Debts</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header