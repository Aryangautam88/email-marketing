import React, { useState } from "react";
import "./Navbar.css";

import logo from "../assets/logo2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="desktop-navbar">

        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>

        <ul className="nav-links">
          <li><a href="/#Home">Home</a></li>
          <li><a href="/#Portfolio">Portfolio</a></li>
          <li><a href="/#Services">Services</a></li>
          <li><a href="/#why-us">Why Us</a></li>
          <li><a href="/#Testimonials">Testimonials</a></li>
          <li><a href="/#Pricing">Pricing</a></li>
        </ul>

        <button className="contact-btn">
          Contact Us
        </button>

      </nav>

      {/* Mobile */}

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
          <a href="#Home" onClick={() => setOpen(false)}>Home</a>

          <a href="#Portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </a>

          <a href="#Services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#why-us" onClick={() => setOpen(false)}>
            Why Us
          </a>

          <a href="#Testimonials" onClick={() => setOpen(false)}>
            Testimonials
          </a>

          <a href="#Pricing" onClick={() => setOpen(false)}>
            Pricing
          </a>

          <a href="#Contact" onClick={() => setOpen(false)}>
            Contact Us
          </a>

        </div>

      </div>
    </>
  );
};

export default Navbar;