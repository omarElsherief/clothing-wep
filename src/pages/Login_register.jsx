import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import './Auth.css'; 

const Login_register = () => {
  const [mode, setMode] = useState('login'); // 'login', 'register', 'reset'

  
  useEffect(() => {
    document.body.classList.add('auth-background');
    return () => {
      document.body.classList.remove('auth-background');
    };
  }, []);

  const wrapperClass = () => {
    if (mode === 'login') return 'wrapper';
    return 'wrapper active'; // register or reset
  };

  return (
    <div className={wrapperClass()}>
      {/* Login Form */}
      <div className="Form-box login">
        <Login
          onRegisterClick={() => setMode('register')}
          onForgotPassword={() => setMode('reset')}
        />
      </div>

      {/* Slide-in Form: Register or Reset */}
      <div className="Form-box register">
        {mode === 'register' ? (
          <Register onLoginClick={() => setMode('login')} />
        ) : (
          <ResetPassword onLoginClick={() => setMode('login')} />
        )}
      </div>
    </div>
  );
};

export default Login_register;
