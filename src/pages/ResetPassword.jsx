// src/components/ResetPassword.jsx
import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const ResetPassword = ({ onLoginClick }) => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validatePassword = (pwd) => {
    if (pwd.length < 6) return 'Min 6 chars';
    if (!/(?=.*[0-9])/.test(pwd)) return 'Needs a number';
    if (!/(?=.*[!@#$%^&*])/.test(pwd)) return 'Needs a symbol';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.username === username);

    if (userIndex === -1) {
      setError('Username not found.');
      return;
    }

    const passwordError = validatePassword(newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    //  Update password
    users[userIndex].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    setSuccess('Password updated!');

    setTimeout(() => {
      onLoginClick();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reset Password</h1>

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
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <FaLock className="icon" />
      </div>

      {error && (
        <p style={{ color: '#ff4d4d', fontSize: '13px', margin: '5px 0 10px 10px' }}>{error}</p>
      )}
      {success && (
        <p style={{ color: '#00ff88', fontSize: '14px', margin: '10px 0', textAlign: 'center' }}>{success}</p>
      )}

      <button type="submit">Update Password</button>

      <div className="register-link">
        <p>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            onLoginClick();
          }}>
            ← Back to Login
          </a>
        </p>
      </div>
    </form>
  );
};

export default ResetPassword;