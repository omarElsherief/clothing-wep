import React, { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../shared/Home.css"; 
import logo from "../../assets/flower.png";
import cartImage from "../../assets/shopping-cart_17641476.png";
import mobileMenu from "../../assets/line_9694578.png";
import { logout } from "../../store/authSlice"; 
import { clearCart } from '../../store/cartSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navRef = useRef(null); 

  const isLogedIn = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => {
    const items = state.cart.items;
    return Object.values(items).reduce((total, item) => total + item.quantity, 0);
  });

  const toggleMenu = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("active");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
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

        {/* Menu Button for Mobile */}
        <button className="menu-btn" onClick={toggleMenu}>
          <img src={mobileMenu} alt="menu button" />
        </button>

        {/* Navigation */}
        <nav className="nav" ref={navRef}>
          <ul className="nav_list">
            <li><Link to="/" className="nav_link">Home</Link></li>
            <li><Link to="/shopping" className="nav_link">Shopping</Link></li>
            <li><Link to="/about" className="nav_link">About</Link></li>
            <li><Link to="/contact" className="nav_link">Contact Us</Link></li>
            <li>
              {isLogedIn ? (
                <button
                  className="nav_link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="nav_link">Login</Link>
              )}
            </li>
          </ul>
        </nav>

        {/* Cart Icon */}
        <div className="relative">
          <button
            onClick={() =>
              isLogedIn ? navigate("/shopping-cart") : navigate("/login")
            }
            className="cart-icon"
          >
            <img src={cartImage} alt="Cart" width="60px" height="50px" />
          </button>
          {isLogedIn && (
            <span className="absolute -top-2 -right-2 bg-[#e91e63] text-white text-sm min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1 count">
              {cartItems || "0"}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
