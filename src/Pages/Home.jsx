import { useState } from "react";
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

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

import icon1 from "../assets/icon1.gif";
import icon2 from "../assets/icon2.gif";
import icon3 from "../assets/icon3.gif";
import icon4 from "../assets/icon4.gif";
import icon5 from "../assets/icon5.gif";

import user1 from "../assets/client1.png";
import user2 from "../assets/client2.png";
import user3 from "../assets/client3.png";

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

    const testimonials = [
        {
            image: user1,
            name: "Shivan and Narresh",
            review:
                "Amazing designs and outstanding communication throughout the project.",
        },

        {
            image: user2,
            name: "Shivan and Narresh",
            review:
                "Professional team with exceptional creative skills and fast delivery.",
        },

        {
            image: user3,
            name: "Shivan and Narresh",
            review:
                "The final result exceeded expectations and boosted engagement.",
        },
    ];

    const [current, setCurrent] = useState(1);

    const pricingPlans = [
        {
            brands: "STANDARD BRANDS",
            requests: 8,
            price: "$600 USD monthly",
            desc1: "Maximum 1 request per day.",
            desc2: "Recommended for small brands are ready to commitx",
        },

        {
            brands: "PREMIUM BRANDS",
            requests: 15,
            price: "$1000 USD monthly",
            desc1: "Maximum 2 requests per day.",
            desc2: "Recommended for brands looking to revamp their flows",
        },

        {
            brands: "STANDARD AGENCIES",
            requests: 20,
            price: "$1500 USD monthly",
            desc1: "Maximum 3 requests per day.",
            desc2: "Recommended for small agencies with 1–3 clients.",
        },
    ];

    return (
        <div>
            {/*-------------------------------- hero --------------------------*/}
            <section className="hero">


                <div className="hero-content">
                    <div className="hero-logo">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>


                    <div className="left-section">

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

            {/*----------------------------- service --------------------------*/}

            <section className="services">
                <div className="container">

                    <h2 className="services-title">
                        Our Services
                    </h2>

                    <div className="services-grid">

                        <div className="service-card">
                            <img src={service1} alt="" />
                            <h3>Email Design</h3>
                            <p>
                                Engage your audience with stunning,
                                high-converting emails.
                            </p>

                            <button>
                                Learn More
                                <span>→</span>
                            </button>
                        </div>

                        <div className="service-card">
                            <img src={service2} alt="" />
                            <h3>Landing Pages</h3>
                            <p>
                                Drive conversions with optimized,
                                engaging landing page designs.
                            </p>

                            <button>
                                Learn More
                                <span>→</span>
                            </button>
                        </div>

                        <div className="service-card">
                            <img src={service3} alt="" />
                            <h3>Static Ads</h3>
                            <p>
                                Visually impactful ads designed
                                to capture attention.
                            </p>

                            <button>
                                Learn More
                                <span>→</span>
                            </button>
                        </div>

                    </div>

                </div>
            </section>

            {/*------------------------------ work---------------------------- */}

            <section className="why-us-section">
                <div className="why-container">

                    <h2 className="why-heading">
                        Why work with us?
                    </h2>

                    <div className="why-grid">

                        <div className="why-card">
                            <img src={icon1} alt="" className="why-icon" />

                            <h3>No Boundaries</h3>

                            <p>
                                We refine every detail until your vision feels exactly
                                right. Every design is carefully crafted to match your
                                brand identity with precision and creativity.
                            </p>
                        </div>

                        <div className="why-card">
                            <img src={icon2} alt="" className="why-icon" />

                            <h3>Crafted to Stand Out</h3>

                            <p>
                                Every visual is designed from scratch with originality
                                and purpose. No templates, no shortcuts — just thoughtful
                                and memorable design solutions.
                            </p>
                        </div>

                        <div className="why-card">
                            <img src={icon3} alt="" className="why-icon" />

                            <h3>Industry-Level Quality</h3>

                            <p>
                                With years of creative expertise, we build modern and
                                cohesive digital experiences that help brands look
                                professional, premium and impactful.
                            </p>
                        </div>

                        <div className="why-card bottom-card">
                            <img src={icon4} alt="" className="why-icon" />

                            <h3>Smooth Collaboration</h3>

                            <p>
                                Our workflow is built for clear communication and seamless
                                project management, ensuring every task and revision stays
                                organized and efficient.
                            </p>
                        </div>

                        <div className="why-card bottom-card">
                            <img src={icon5} alt="" className="why-icon" />

                            <h3>Fast Turnaround</h3>

                            <p>
                                Quick delivery without compromising quality. We focus on
                                efficient execution so your projects move forward smoothly
                                and on schedule.
                            </p>
                        </div>

                    </div>

                    <div className="why-btn-wrapper">
                        <button className="why-btn">
                            Get Started
                        </button>
                    </div>

                </div>
            </section>

            {/*-------------------------- Testimonial-------------------------- */}

            <section className="testimonial-section">

                <div className="testimonial-container">

                    <h2 className="testimonial-heading">
                        Real stories, Real results.
                    </h2>

                    <div className="testimonial-slider">

                        {testimonials.map((item, index) => {

                            let position = "side";

                            if (index === current) {
                                position = "active";
                            }

                            return (
                                <div
                                    key={index}
                                    className={`testimonial-card ${position}`}
                                >

                                    <img
                                        src={item.image}
                                        alt=""
                                        className="client-image"
                                    />

                                    <h3>{item.name}</h3>

                                    <div className="stars">
                                        ★★★★★
                                    </div>

                                    <p>
                                        {item.review}
                                    </p>

                                </div>
                            )
                        })}

                    </div>

                    <div className="controls">

                        <button
                            onClick={() =>
                                setCurrent(
                                    current === 0
                                        ? testimonials.length - 1
                                        : current - 1
                                )
                            }
                        >
                            ‹
                        </button>

                        <div className="dots">
                            {testimonials.map((_, i) => (
                                <span
                                    key={i}
                                    className={
                                        current === i
                                            ? "dot active-dot"
                                            : "dot"
                                    }
                                />
                            ))}
                        </div>

                        <button
                            onClick={() =>
                                setCurrent(
                                    current === testimonials.length - 1
                                        ? 0
                                        : current + 1
                                )
                            }
                        >
                            ›
                        </button>

                    </div>

                </div>

            </section>

            {/*---------------------------- pricing ---------------------------*/}

            <section className="pricing-section">
                <div className="pricing-container">

                    <h2 className="pricing-heading">
                        Pricing for Emails
                    </h2>

                    <div className="pricing-grid">

                        {pricingPlans.map((plan, index) => (
                            <div className="pricing-card" key={index}>

                                <div className="pricing-top">

                                    <div className="plan-header">
                                        <span>Up to</span>
                                        <h4>{plan.brands}</h4>
                                    </div>

                                    <h1>{plan.requests}</h1>

                                    <h3>Requests/mo</h3>

                                    <h2>{plan.price}</h2>

                                    <p>{plan.desc1}</p>
                                    <p>{plan.desc2}</p>

                                </div>

                                <button className="subscribe-btn">
                                    Subscribe Now
                                    <span>→</span>
                                </button>

                            </div>
                        ))}

                    </div>

                    <div className="pricing-banner">

                        <div className="banner-text">
                            <span>FIRST IMPRESSION:</span>

                            See the quality for yourself -
                            get started with a single email
                            design for <strong>$90 USD.</strong>
                        </div>

                        <button>
                            Try Now
                        </button>

                    </div>

                </div>
            </section>


        </div>
    );
};

export default Home;