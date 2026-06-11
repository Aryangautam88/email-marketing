import React, { useState } from "react";
import "./Navbar.css";

import logo from "../assets/logo2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}

      <nav className="desktop-navbar">

        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Why Us</li>
          <li>Testimonials</li>
          <li>Pricing</li>
          <li>FAQ</li>
        </ul>

        <button className="contact-btn">
          Contact Us
        </button>

      </nav>

      {/* Mobile Navbar */}

      <div className="mobile-wrapper">

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          <img src={logo} alt="" />
        </button>

        <div
          className={`mobile-menu ${
            open ? "show-menu" : ""
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Portfolio</a>
          <a href="/">Services</a>
          <a href="/">Why Us</a>
          <a href="/">Testimonials</a>
          <a href="/">Our Process</a>
          <a href="/">Pricing</a>
          <a href="/">Our Team</a>
          <a href="/">FAQs</a>
          <a href="/">Contact Us</a>
        </div>

      </div>
    </>
  );
};

export default Navbar;