import React, { useState } from 'react';
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const storedUsername = JSON.parse(localStorage.getItem('username')) || null;
  const storedPassword = JSON.parse(localStorage.getItem('password')) || null;

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === storedUsername && password === storedPassword) {
      toast.success("Login success");
      navigate("/home");
    } else {
      toast.error("Invalid username or password");
    }
  }

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('password', JSON.stringify(password));
    toast.success("User registered successfully");
  }

  return (
    <div className="login__page">
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="input-box">
            <input onChange={handleUsername} value={username} type="text" required placeholder='Username' />
            <FaUserAlt className='icon' />
          </div>

          <div className="input-box">
            <input onChange={handlePassword} type="password" required placeholder='Password' value={password} />
            <FaLock className='icon' />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type='submit'>Login</button>

          <div className="register-link">
            <p>Don't have an account? <button onClick={handleRegister} type='button'>Register</button></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
