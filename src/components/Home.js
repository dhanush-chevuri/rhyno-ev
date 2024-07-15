import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "C:/Users/DELL/rhyno-ev/src/styles/Home.css";
import "C:/Users/DELL/rhyno-ev/src/styles/Slider.css";

// Import vehicle images
import vehicle1 from '../assets/images/vehicle1.jpg';
import vehicle2 from '../assets/images/vehicle2.jpg';
import vehicle3 from '../assets/images/vehicle3.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % totalSlides);
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <span className="dynamic-word">Style</span>.</h1>
        <div className="pre-book-container">
          <Link to="/pre-book" className="pre-book-button">Pre-book Now</Link>
        </div>
      </section>
      <section className="vehicles">
        <div className="vehicle-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <div className="vehicle-card">
            <img src={vehicle1} alt="SE03 Lite" />
            <Link to="/products/se03-lite">SE03 Lite</Link>
          </div>
          <div className="vehicle-card">
            <img src={vehicle2} alt="SE03" />
            <Link to="/products/se03">SE03</Link>
          </div>
          <div className="vehicle-card">
            <img src={vehicle3} alt="SE03 Max" />
            <Link to="/products/se03-max">SE03 Max</Link>
          </div>
        </div>
        <button className="prev-button" onClick={prevSlide}>&#10094;</button>
        <button className="next-button" onClick={nextSlide}>&#10095;</button>
      </section>
      <section className="usp-carousel">
        <div className="usp-item">
          <h2>LFP Battery</h2>
          <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features...</p>
        </div>
        <div className="usp-item">
          <h2>Wider Tyres</h2>
          <p>Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres...</p>
        </div>
        <div className="usp-item">
          <h2>Range Prediction</h2>
          <p>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety...</p>
        </div>
        <div className="usp-item">
          <h2>Extraordinary Experience</h2>
          <p>Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style!</p>
        </div>
        <div className="usp-item">
          <h2>Rugged and Simple Design</h2>
          <p>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking...</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
