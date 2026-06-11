import React from "react";
import "./Portfolio.css";

import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";

// ----------------------------------Second----------------------

import portfolio5 from "../assets/portfolio5.png";
import portfolio6 from "../assets/portfolio6.png";
import portfolio7 from "../assets/portfolio7.png";
import portfolio8 from "../assets/portfolio8.png";

// ----------------------------------Third----------------------

import portfolio9 from "../assets/portfolio9.png";
import portfolio10 from "../assets/portfolio10.png";
import portfolio11 from "../assets/portfolio11.png";
import portfolio12 from "../assets/portfolio12.png";

// ----------------------------------Fourth----------------------

import portfolio13 from "../assets/portfolio13.png";
import portfolio14 from "../assets/portfolio14.png";
import portfolio15 from "../assets/portfolio15.png";
import portfolio16 from "../assets/portfolio16.png";


// ----------------------------------Fifth----------------------

import portfolio17 from "../assets/portfolio17.png";
import portfolio18 from "../assets/portfolio18.png";
import portfolio19 from "../assets/portfolio19.png";
import portfolio20 from "../assets/portfolio20.png";



const Portfolio = () => {
  return (
    <section className="portfolio-section">

      <div className="portfolio-container">

        <h2>Portfolio</h2>

        <p className="portfolio-desc">
          At Shivam Email, we believe that email is a powerful tool for
          connecting with your audience, and our designs reflect that belief.
          Our portfolio showcases a collection of email designs that are not
          just visually stunning but also strategically crafted to drive
          engagement, conversions, and brand loyalty.
        </p>

        {/* -------------------------First------------------------------- */}

        <div className="portfolio-box">

          <div className="portfolio-brand">
            <h3>YITAI</h3>
          </div>

          <div className="portfolio-gallery">

            <div className="mail-card">
              <img src={portfolio1} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio2} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio3} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio4} alt="" />
            </div>

          </div>

        </div>

        {/*-------------------------- Second------------------------------ */}

        <div className="portfolio-box">

          <div className="portfolio-brand">
            <h3>SHIVAN & <br /> NARRESH</h3>
          </div>

          <div className="portfolio-gallery">

            <div className="mail-card">
              <img src={portfolio5} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio6} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio7} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio8} alt="" />
            </div>

          </div>

        </div>

        {/*------------------------- third------------------------------- */}

        <div className="portfolio-box">

          <div className="portfolio-brand">
            <h3>EVOLVED</h3>
          </div>

          <div className="portfolio-gallery">

            <div className="mail-card">
              <img src={portfolio9} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio10} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio11} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio12} alt="" />
            </div>

          </div>

        </div>

        {/* -------------------------Fourth ------------------------------*/}

        <div className="portfolio-box">

          <div className="portfolio-brand">
            <h3>HINDOSTAN <br /> &  ARCHIVE</h3>
          </div>

          <div className="portfolio-gallery">

            <div className="mail-card">
              <img src={portfolio13} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio14} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio15} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio16} alt="" />
            </div>

          </div>

        </div>

        {/*-------------------------- Fifth------------------------------ */}

        <div className="portfolio-box">

          <div className="portfolio-brand">
            <h3>GOOD & <br /> SERVICES</h3>
          </div>

          <div className="portfolio-gallery">

            <div className="mail-card">
              <img src={portfolio17} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio18} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio19} alt="" />
            </div>

            <div className="mail-card">
              <img src={portfolio20} alt="" />
            </div>

          </div>

        </div>


      </div>



    </section>
  );
};

export default Portfolio;