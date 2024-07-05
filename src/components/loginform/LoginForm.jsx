import React from 'react'
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import "./LoginForm.css";

const LoginForm = () => {
  const navigate=useNavigate();
  const login=(e)=>{
    e.preventDefault();
    navigate("/home")
  }
  return (
    <div className="login__page">
      <div className='wrapper'>
        <form onSubmit={login}>
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder='Username' />
            <FaUserAlt className='icon' />
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' />
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label ><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type='submit'>Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm