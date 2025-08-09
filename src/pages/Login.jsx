// src/components/Login.jsx
import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { initializeCart } from '../store/cartSlice';
import "./Login_register.css";
import "./Auth.css";

const Login = ({ onRegisterClick, onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Load all users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find matching user
    const matchedUser = users.find(u => u.username === username && u.password === password);

    if (matchedUser) {
      dispatch(login(matchedUser));
      dispatch(initializeCart(matchedUser.username)); 
      navigate('/');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <FaUser className="icon" />
      </div>

      <div className="input-box">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FaLock className="icon" />
      </div>

      <div className="remember-forget">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onForgotPassword();
        }}>
          Forgot password?
        </a>
      </div>

      <button type="submit">Login</button>

      <div className="register-link">
        <p>
          Don't have an account?{' '}
          <a href="" onClick={(e) => {
            e.preventDefault();
            onRegisterClick();
          }
          }>
            Register
          </a>
        </p>
      </div>
    </form>
  );
};

export default Login;