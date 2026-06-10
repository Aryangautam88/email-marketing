import React from "react";
import "./Home.css";

import logo from "../assets/logo.png";
import img1 from "../assets/mail1.png";
import img2 from "../assets/mail2.png";
import img3 from "../assets/mail3.png";
import img4 from "../assets/mail4.png";
import img5 from "../assets/mail5.png";
import img6 from "../assets/mail6.png";

import portimg1 from "../assets/portimg1.png";
import portimg2 from "../assets/portimg2.png";
import portimg3 from "../assets/portimg3.png";
import portimg4 from "../assets/portimg4.png";
import portimg5 from "../assets/portimg5.png";
import portimg6 from "../assets/portimg6.png";
import portimg7 from "../assets/portimg7.png";
import portimg8 from "../assets/portimg8.png";

const Home = () => {
    const column1 = [img1, img2];
    const column2 = [img3, img4];
    const column3 = [img5, img6];

    const images = [
        portimg1,
        portimg2,
        portimg3,
        portimg4,
        portimg5,
        portimg6,
        portimg7,
        portimg8,
    ];

    return (
        <div>
            {/*-------------------------------- hero --------------------------*/}
            <section className="hero">
                <div className="hero-content">

                    <div className="left-section">
                        <div className="logo-box">
                            <img src={logo} alt="Shivam Email Logo" className="logo-img" />

                        </div>

                        <h1>
                            Crafting stories <br />
                            delivered straight <br />
                            to inboxes.
                        </h1>

                        <p>
                            At Shivam Email, we blend strategy with creativity to
                            craft high-performing email campaigns. From brands to
                            growing businesses, we create personalized experiences
                            that engage, convert, and leave a lasting impression.
                        </p>

                        <button>Contact Us</button>
                    </div>

                    <div className="right-section">

                        <div className="column scroll-up">
                            {[...column1, ...column1].map((img, index) => (
                                <img key={index} src={img} alt="" />
                            ))}
                        </div>

                        <div className="column scroll-down">
                            {[...column2, ...column2].map((img, index) => (
                                <img key={index} src={img} alt="" />
                            ))}
                        </div>

                        <div className="column scroll-up">
                            {[...column3, ...column3].map((img, index) => (
                                <img key={index} src={img} alt="" />
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/*---------------------------- portfolio------------------------- */}

            <section className="portfolio-section">
                <div className="portfolio-header">
                    <h2>
                        Bringing creativity into action, weaving visual
                        <br />
                        stories that connect and convert.
                    </h2>

                    <button>View Full Portfolio</button>
                </div>

                <div className="slider-wrapper">
                    <div className="slider-track">

                        {[...images, ...images].map((img, index) => (
                            <div className="card" key={index}>
                                <img src={img} alt={`portfolio-${index}`} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;