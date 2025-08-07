// Header Component
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../shared/Home.css"; 
import logo from "../../assets/flower.png";
import cartImage from "../../assets/shopping-cart_17641476.png";
import mopileMenu from "../../assets/line_9694578.png";
import { logout } from "../../store/authSlice"; 
import ShoppingCart from '../../pages/ShoppingCart';
import { clearCart } from '../../store/cartSlice';




const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogedIn = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => {
    const items = state.cart.items;
    return Object.values(items).reduce((total, item) => total + item.quantity, 0);
  });
  

  const handleLogout = () => {
    dispatch(logout()); // Clear Redux state
    navigate("/"); 
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="icon">
          <Link to="/">
            <img src={logo} width="40px" height="40px" alt="Logo" />
            <h1>FASHION</h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-btn" id="menu-btn">
          <img src={mopileMenu} alt="menu button" />
        </button>

        {/* Navigation */}
        <nav className="nav" id="nav">
          <ul className="nav_list">
            <li><Link to="/" className="nav_link">Home</Link></li>
            <li><Link to="/shopping" className="nav_link">Shopping</Link></li>
            <li><Link to="/about" className="nav_link">About</Link></li>
            <li><Link to="/contact" className="nav_link">Contact Us</Link></li>
            <li>
              {
                isLogedIn ? (
                  <Link
                to="#"
                className="nav_link"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  dispatch(clearCart());
                  handleLogout();
                }}
              >
                Logout
              </Link>
                ) : (
                  <Link to="/login" className="nav_link">Login</Link>
                )
              }
              
            </li>
          </ul>
        </nav>

        {/* Cart Icon */}
        <div className="relative">
        <button onClick={()=> isLogedIn ? navigate('/shopping-cart') : navigate('/login')} className="cart-icon">
          <img src={cartImage} alt="Cart" width="60px" height="50px" className='cursor-pointer' />
        </button>
          <span className='absolute -top-2 -right-2 bg-[#e91e63] text-white text-sm min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1'>{cartItems||"0"}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
