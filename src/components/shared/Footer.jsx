import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

function Footer() {
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
         <footer>
        <div className="footer">
          <div className="footer-content">
            <div className="logo-social">
              <div className="logo">
                <h1>Fashion</h1>
              </div>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>

              </div>
            </div>

            <div className="links-section">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shopping">Shopping</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>
                </li>
              </ul>
            </div>
            <div className="Signup-btn">
              {
                isLogedIn ? (
                  <Link
                to="#"
                className=""
                onClick={(e) => {
                  e.preventDefault(); 
                  handleLogout();
                }}
              >
                Logout
              </Link>
                ) : (
                  <Link to="/login" className="">Login</Link>
                )
                }
              <p className="rights">© Fashion All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;