import "./display.css"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import apple from "./assets/beat.png"


const LandingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="landing-container">
      <div className="content" data-aos="fade-right">
        <p className="tag">🎵 Quick Music</p>
        <h1>Enhance Your Music Experience</h1>
        <div className="countdown">
          <div className="time-box"><span>15</span> Day</div>
          <div className="time-box"><span>10</span> Hrs</div>
          <div className="time-box"><span>56</span> Min</div>
          <div className="time-box"><span>54</span> Sec</div>
        </div>
        <button className="cta-btn">Check it Out!</button>
      </div>
      <div className="image" data-aos="fade-left">
        <img src={apple} alt="Headphones" />
      </div>
    </section>
  );
};

export default LandingSection;

