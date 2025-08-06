// src/components/home_page.jsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";
// import { useDispatch } from "react-redux";
// import { logout } from "../store/authSlice"; 
import "../components/shared/Home.css";

// Import images
import heroImg from '../assets/photo_5798412124450572470_y.jpg';
import tshirtIcon from '../assets/martial-arts_15739278.png';
import dressIcon from '../assets/dress_4305451.png';
import ringIcon from '../assets/ring_1235596.png';
import sunglassesIcon from '../assets/sunglasses_11405737.png';
import watchIcon from '../assets/wrist-watch_4795388.png';
import handbagIcon from '../assets/hand-bag_4217321.png';
import collection1 from '../assets/colldre.jpg';
import collection2 from '../assets/collec2.jpg';
import collection3 from '../assets/collect.jpg';


// Hero Section
const HeroSection = () => {
  return (
    <div className="photo">
      <img src={heroImg} alt="Hero" />
      <div className="text">
        <h2>WHERE ELEGANCE</h2>
        <h2>MEETS ATTITUDE</h2>
        <Link to="/shopping">
          <button className="hero-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

// Product Icons
const ProductIcons = () => {
  const navigate = useNavigate();
  return (
    <div className="products-icons">
      <div className="product-icon" onClick={() => navigate('/categories/mens-shirts')}>
        <img src={tshirtIcon} alt="t-shirt" />
        <p>T-shirt</p>
      </div>
      <div className="product-icon" onClick={() => navigate('/categories/womens-dresses')}>
        <img src={dressIcon} alt="dress" />
        <p>Dress</p>
      </div>
      <div className="product-icon" onClick={() => navigate('/categories/womens-jewellery')}>
        <img src={ringIcon} alt="ring" />
        <p>Ring</p>
      </div>
      <div className="product-icon" onClick={() => navigate('/categories/womens')}>
        <img src={sunglassesIcon} alt="sunglasses" />
        <p>Sunglasses</p>
      </div>
      <div className="product-icon" onClick={() => navigate('/categories/womens-watches')}>
        <img src={watchIcon} alt="watch" />
        <p>Watch</p>
      </div>
      <div className="product-icon" onClick={() => navigate('/categories/womens-bags')}>
        <img src={handbagIcon} alt="handbag" />
        <p>Hand Bag</p>
      </div>
    </div>
  );
};

// Collection Section
const Collection = () => {
  return (
    <>
      <h2 className="collection-title">Shop Collection</h2>
      <div className="collection">
        <div>
          <img src={collection1} width="500px" height="608px" className="vimg" alt="Collection 1" />
        </div>
        <div>
          <img src={collection2} width="400px" height="300px" className="himg" alt="Collection 2" />
          <br />
          <img src={collection3} width="400px" height="300px" className="himg" alt="Collection 3" />
        </div>
      </div>
    </>
  );
};

// Main Home Component
const Home = () => {
  // useEffect(() => {
  //   const menuBtn = document.getElementById("menu-btn");
  //   const nav = document.getElementById("nav");

  //   const toggleNav = () => {
  //     nav.classList.toggle("active");
  //   };

  //   if (menuBtn && nav) {
  //     menuBtn.addEventListener("click", toggleNav);
  //   }

  //   return () => {
  //     if (menuBtn && nav) {
  //       menuBtn.removeEventListener("click", toggleNav);
  //     }
  //   };
  // }, []);

  return (
    <>
      <HeroSection />

      {/* Product Icons with white background */}
      <div className="products-icons-container">
        <ProductIcons />
      </div>

      {/* Collection with white background */}
      <div className="collection-container">
        <Collection />
      </div>
    </>
  );
};

export default Home;