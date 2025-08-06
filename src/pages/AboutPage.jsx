// src/components/About.jsx
import React from 'react';
import './About.css';
import blog3 from '../assets/blog-3.jpg';
import style1 from '../assets/pexels-mikhail-nilov-7573460.jpg';
import style2 from '../assets/5846.jpg';
import style3 from '../assets/pexels-cottonbro-6764016.jpg';
import style4 from '../assets/teenager-boy-stylish-clothes-posing.jpg';
import avatar1 from '../assets/2148213406.jpg';
import avatar2 from '../assets/911.jpg';
import avatar3 from '../assets/137665.jpg';

const AboutPage = () => {
  return (
      <div>
        <div className="about-page">
      {/* Hero Section */}
      <section className="hero"> 
        <div className="hero-text">
          <h1>About US</h1>
          <h2>We Value Our Customers and Celebrate Style</h2>
          <p>At YourBrandName, we blend fashion and comfort to help you
            look and feel amazing every day. Our designs empower
            self-expression and confidence for everyone.</p>
        </div>
        <div className="hero-img">
          <img src={blog3} alt="Hero" /> 
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <img src={style1} alt="Style 1" />
        <img src={style2} alt="Style 2" />
        <img src={style3} alt="Style 3" />
        <img src={style4} alt="Style 4" />
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose US</h2>
        <div className="cards">
          <div className="card card1">
            <h3>Modern Fashion</h3>
            <div className="content">Stay ahead of trends with fresh designs
              updated every season.</div>
          </div>
          <div className="card card2">
            <h3>Premium Fabrics</h3>
            <div className="content">We select high-quality materials that
              feel good and last long.</div>
          </div>
          <div className="card card3">
            <h3>Sustainable Choices</h3>
            <div className="content">Eco-conscious production is at the
              heart of what we do.</div>
          </div>
          <div className="card card4">
            <h3>Inclusive for All</h3>
            <div className="content">Styles for every shape, size, and
              identity. Everyone is welcome.</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <div className="testimonial__img first"></div>
            <div className="testimonial__avatar"> 
              <img src={avatar1} alt="Daniel" />
            </div>
            <div className="testimonial__title tip">
              <h3>Daniel</h3>
            </div>
            <div className="testimonial__subtitle">
              <p>"I love how stylish and comfortable everything is. My go-to shop now!"</p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial__img second"></div>
            <div className="testimonial__avatar"> 
              <img src={avatar2} alt="Michael" />
            </div>
            <div className="testimonial__title tip">
              <h3>Michael</h3>
            </div>
            <div className="testimonial__subtitle">
              <p>"Finally, a brand that understands quality and sustainability."</p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial__img therd"></div>
            <div className="testimonial__avatar"> 
              <img src={avatar3} alt="Mike" />
            </div>
            <div className="testimonial__title tip">
              <h3>Mike</h3>
            </div>
            <div className="testimonial__subtitle">
              <p>"Fast shipping and top-notch service"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>Membership Plans</h2>
        <div className="pricing">
          <div className="pricing-card">
            <h3>$29</h3>
            <p>Basic Plan</p>
            <p>Access to limited collections</p>
          </div>
          <div className="pricing-card">
            <h3>$59</h3>
            <p>Premium Plan</p>
            <p>Early access to new releases + discounts</p>
          </div>
          <div className="pricing-card">
            <h3>$99</h3>
            <p>Exclusive Plan</p>
            <p>VIP events, free shipping, exclusive drops</p>
          </div>
        </div>    
      </section>
    </div>
      </div>
    
  );
};

export default AboutPage; 