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
import saleWomanImg from '../assets/lovely-shopping-woman-smiling-wearing-hat-isolated-green-background.jpg';
import vectorImg from '../assets/Vector.png';
import moneyImg from '../assets/money.png';
import lockImg from '../assets/lock 01.png';
import callImg from '../assets/call.png';
import manImg from '../assets/man2.jpg';
import kidImg from '../assets/kid-studio-portrait-isolated.jpg';
import girlImg from '../assets/girl.jpg';
import womenImg from '../assets/women.png';


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
const CountdownSection = () => {
  useEffect(() => {
    const countdownElement = document.getElementById("countdown");
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    const targetDate = new Date("2025-12-31T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        if (countdownElement) countdownElement.innerHTML = "Offer expired";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.innerHTML = days;
      if (hoursEl) hoursEl.innerHTML = hours;
      if (minutesEl) minutesEl.innerHTML = minutes;
      if (secondsEl) secondsEl.innerHTML = seconds;
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="timer">
        <div className="content">
          <div className="promotion">PROMOTION</div>
          <h2>Hurry up! 40% OFF</h2>
          <p>Thousands of high tech are waiting for you</p>
          <div>Offer expires in:</div>
          <div className="countdown" id="countdown">
            <div className="time-box" id="days">02</div>
            <div className="time-box" id="hours">12</div>
            <div className="time-box" id="minutes">45</div>
            <div className="time-box" id="seconds">05</div>
          </div>
          <Link to={"/shopping"} className="btn">Shop now</Link>
        </div>
        <div className="image-section">
          <img src={saleWomanImg} alt="Sale" />
        </div>
      </div>
    </section>
  );
};

  const ExtraSections = () => (
  <>
    <CountdownSection />
    
    {/* Services */}
    <section>
      <div className="services">
        {[
          { img: vectorImg, title: "Free Shipping", desc: "Order above $200" },
          { img: moneyImg, title: "Money-back", desc: "30 days guarantee" },
          { img: lockImg, title: "Secure Payments", desc: "Secured by Stripe" },
          { img: callImg, title: "24/7 Support", desc: "Phone and Email support" }
        ].map((service, index) => (
          <div className="service" key={index}>
            <div className="icon"><img src={service.img} alt="" /></div>
            <h4 className="title">{service.title}</h4>
            <p className="desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Newsfeed */}
    <section>
      <div className="contanier-social">
        <div className="content-social">
          <span>newsfeed</span>
          <h2>Instagram</h2>
          <p>Follow us on social media for more discount & promotions</p>
          <div className="link"><a href="#">@Fashion_official</a></div>
        </div>
        <div className="image-social">
          <img src={manImg} alt="Man fashion" />
          <img src={kidImg} alt="Kid fashion" />
          <img src={girlImg} alt="Girl fashion" />
          <img src={womenImg} alt="Women fashion" />
        </div>
      </div>
    </section>


    
  </>
);
  return (
    <>
      <HeroSection />
      <div className="products-icons-container">
        <ProductIcons />
      </div>
      <div className="collection-container">
        <Collection />
      </div>
      <ExtraSections />
    </>
  );
};

export default Home;