import React, { useState } from "react";
import "./Footer.css";

import logo from "../assets/logo.png";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
    const [active, setActive] = useState(null);

    const faqData = [
        {
            question: "What design software do you use?",
            answer:
                "We primarily use Figma, Adobe Photoshop and Illustrator."
        },
        {
            question: "Do you offer trial emails?",
            answer:
                "Yes, depending on project requirements."
        },
        {
            question:
                "Can I request more emails than my monthly limit?",
            answer:
                "Yes, additional requests can be added."
        },
        {
            question: "What will you need from my end?",
            answer:
                "Brand assets, content and campaign details."
        },
        {
            question:
                "Do you offer other design services other than emails?",
            answer:
                "Yes, landing pages, ads and other creatives."
        },
        {
            question: "Do you offer refunds?",
            answer:
                "Refunds are reviewed case by case."
        }
    ];

    return (
        <footer className="footer-section" id="Contact">

            {/* FAQ */}

            <div className="faq-container">

                <h2>Frequently Asked Questions</h2>

                <p>
                    Need to know more? We've got answers!
                </p>

                <div className="faq-list">

                    {faqData.map((item, index) => (
                        <div className="faq-item" key={index}>

                            <button
                                className="faq-question"
                                onClick={() =>
                                    setActive(
                                        active === index
                                            ? null
                                            : index
                                    )
                                }
                            >
                                {item.question}

                                <span>
                                    {active === index
                                        ? "-"
                                        : "+"}
                                </span>
                            </button>

                            {active === index && (
                                <div className="faq-answer">
                                    {item.answer}
                                </div>
                            )}

                        </div>
                    ))}

                </div>

            </div>

            {/* CONTACT */}

            <div className="contact-container">

                <h2>Got more questions?</h2>

                <p>
                    Drop us a message below!
                </p>

                <form className="contact-form">

                    <div className="form-row">
                        <label>Name:</label>
                        <input type="text" />
                    </div>

                    <div className="form-row">
                        <label>Company:</label>
                        <input type="text" />
                    </div>

                    <div className="form-row">
                        <label>Email Address:</label>
                        <input type="email" />
                    </div>

                    <div className="form-row">
                        <label>Package:</label>

                        <select>
                            <option>
                                8 Emails/month
                            </option>

                            <option>
                                15 Emails/month
                            </option>

                            <option>
                                20 Emails/month
                            </option>
                        </select>
                    </div>

                    <div className="form-row">
                        <label>Message:</label>

                        <textarea rows="5" />
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Submit
                    </button>

                </form>

            </div>

            {/* FOOTER */}

            <div className="footer-bottom">

                <img
                    src={logo}
                    alt="logo"
                />
                <div className="footer-social">

                    <span>Follow us:</span>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTwitter />
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>

                </div>

                <p>
                    © 2025 Shivam Email
                </p>

            </div>

        </footer>
    );
};

export default Footer;