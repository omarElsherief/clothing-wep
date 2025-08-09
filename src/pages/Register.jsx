// src/components/Register.jsx
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './Auth.css';

const Register = ({ onLoginClick }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!username.trim()) newErrors.username = 'Username is required';
    else if (username.length < 3) newErrors.username = 'At least 3 characters';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.email = 'Email is required';
    else if (!emailPattern.test(email)) newErrors.email = 'Invalid email';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Min 6 characters';
    else if (!/(?=.*[0-9])/.test(password)) newErrors.password = 'Needs a number';
    else if (!/(?=.*[!@#$%^&*])/.test(password)) newErrors.password = 'Needs a symbol';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.some((u) => u.username === username)) {
        alert('Username already exists!');
        return;
      }

      const newUser = { username, email, password };
      const updatedUsers = [...users, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      alert('Registration successful! You can now log in.');
      onLoginClick(); // Switch to login screen
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration</h1>

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
      {errors.username && <p className="error text-red-500">{errors.username}</p>}

      <div className="input-box">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FaEnvelope className="icon" />
      </div>
      {errors.email && <p className="error text-red-500">{errors.email}</p>}

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
      {errors.password && <p className="error text-red-500">{errors.password}</p>}

      <div className="remember-forget">
        <label>
          <input type="checkbox" required /> I agree to Terms
        </label>
      </div>

      <button type="submit">Register</button>

      <div className="register-link">
        <p>
          Already have an account?{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onLoginClick();
            }}
          >
            Login
          </a>
        </p>
      </div>
    </form>
  );
};

export default Register;
