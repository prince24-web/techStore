import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <nav className="navbar" data-aos="fade-down">
      {/* Center - Logo */}
      <h2 data-aos="fade-right">eTrade</h2>
      {/* Middle - Navigation Links */}
      <ul className="nav-links" data-aos="fade-left">
  <li><Link className="Route-link" to="/">Home</Link></li>
  <li><Link  className="Route-link" to="/shop">Shop</Link></li>
  <li><Link  className="Route-link" to="/about">About</Link></li>
  <li><Link  className="Route-link" to="/contact">Contact</Link></li>
</ul>

    </nav>
  );
};

export default Navbar;
