import React, { useState } from 'react';
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./LoginForm.css";

const LoginForm = () => {
  let [detail, setDetail] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('username'));
    const storedPassword = JSON.parse(localStorage.getItem('password'));

    if (detail.username === storedUser && detail.password === storedPassword) {
      navigate("/home");
    } else {
      toast.error('Invalid username or password');
    }
  };

  const handleUsername = (e) => {
    setDetail({ ...detail, username: e.target.value });
  };

  const handlePassword = (e) => {
    setDetail({ ...detail, password: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('username', JSON.stringify(detail.username));
    localStorage.setItem('password', JSON.stringify(detail.password));
    toast.success('User registered successfully');
  };

  return (
    <div className="login__page">
      <div className='wrapper'>
        <form onSubmit={login}>
          <h1>Login</h1>

          <div className="input-box">
            <input onChange={handleUsername} type="text" required placeholder='Username' value={detail.username} />
            <FaUserAlt className='icon' />
          </div>

          <div className="input-box">
            <input onChange={handlePassword} type="password" required placeholder='Password' value={detail.password} />
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type='submit'>Login</button>

          <div className="register-link">
            <p>Don't have an account? <button onClick={handleRegister}>Register</button></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
