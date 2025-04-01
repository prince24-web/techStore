import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.css";

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
        <li>Home</li>
        <li>Shop</li>
        <li>Pages</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
