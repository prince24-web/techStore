import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./category.css";
import iphone from "./assets/iphone-15.png";
import cpu from "./assets/cpu.png";
import speaker from "./assets/jbl-speaker.png";
import projector from "./assets/projector.png";
import ps5 from "./assets/ps5.png";
import vr from "./assets/VR.png";
import check from "./assets/check.png";

function CategorySec() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation speed in milliseconds
      easing: "ease-in-out", // Smooth animation
      once: true, // Only animate once per page load
    });
  }, []);

  return (
    <>
      <div className="Cat-section">
        <div className="cat-title" data-aos="fade-down">
          <img src={check} alt="" /> Category
          <h2>Browse by Category</h2>
        </div>

        <div className="Cat-grid">
          <div className="Cat-box" data-aos="fade-up">
            <img src={iphone} alt="" />
            <p>iPhone</p>
          </div>
          <div className="Cat-box" data-aos="fade-up" data-aos-delay="100">
            <img src={cpu} alt="" />
            <p>System Units</p>
          </div>
          <div className="Cat-box" data-aos="fade-up" data-aos-delay="200">
            <img src={vr} alt="" />
            <p>VR Headset</p>
          </div>
          <div className="Cat-box" data-aos="fade-up" data-aos-delay="300">
            <img src={ps5} alt="" />
            <p>Console</p>
          </div>
          <div className="Cat-box" data-aos="fade-up" data-aos-delay="400">
            <img src={projector} alt="" />
            <p>Mini Projector</p>
          </div>
          <div className="Cat-box" data-aos="fade-up" data-aos-delay="500">
            <img src={speaker} alt="" />
            <p>Speaker</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategorySec;
