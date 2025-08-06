// Header Component
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "../shared/Home.css"; 
import logo from "../../assets/flower.png";
import cartImage from "../../assets/shopping-cart_17641476.png";
import mopileMenu from "../../assets/line_9694578.png";




// import { logout } from "../store/authSlice"; // Import logout action
const Header = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   dispatch(logout()); // Clear Redux state
  //   navigate("/login", { replace: true }); // Redirect to login
  // };

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
            {/* <li><Link to="/contact" className="nav_link">Contact Us</Link></li> */}
            {/* <li>
              <Link
                to="#"
                className="nav_link"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleLogout();
                }}
              >
                Logout
              </Link>
            </li> */}
          </ul>
        </nav>

        {/* Cart Icon */}
        <Link to="/shopping">
          <img src={cartImage} alt="Cart" width="60px" height="50px" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
