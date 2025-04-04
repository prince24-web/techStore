import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import "./App.css";
import headphone from "./assets/backheadphone.png";
import smart from "./assets/smartwatch.png";
import CategorySec from "./catergory";
import profile1 from './assets/profile1.jpg'
import profile2 from './assets/profile2.jpg'
import profile3 from './assets/profile3.jpg'
import LandingSection from "./display"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation speed
      easing: "ease-in-out", // Smooth easing
      once: true, // Ensures animations run only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {/* Left Content */}
        <div className="left-content" data-aos="fade-right">
          <p className="deal-text">🔥 Hot Deal in This Week</p>
          <h1>Roco Wireless Headphone</h1>
          <button className="shop-btn" data-aos="zoom-in">🛒 Shop Now</button>
          <div className="reviews" data-aos="fade-up">
            <img src={profile1} alt="user" />
            <img src={profile2} alt="user" />
            <img src={profile3} alt="user" />
            <p>100+ Reviews ⭐⭐⭐⭐⭐</p>
          </div>
        </div>

        {/* Right Images */}
        <img className="headphone-img" src={headphone} alt="Headphone" data-aos="fade-left" />
        <img className="watch-img" src={smart} alt="Smartwatch" data-aos="zoom-in" />
      </div>
      
      {/* Category Section */}
      <CategorySec />
      <LandingSection/>
    </>
  );
};

export default App;
