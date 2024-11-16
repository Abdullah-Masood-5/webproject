import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import "../Styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h5 className="footer-heading">Airbnb</h5>
                    <ul>
                        <li><a href="#!">About Us</a></li>
                        <li><a href="#!">Become a Host</a></li>
                        <li><a href="#!">Host your home</a></li>
                        <li><a href="#!">Host an Online Experience</a></li>
                        <li><a href="#!">Resource Center</a></li>
                        <li><a href="#!">Careers</a></li>
                        <li><a href="#!">Privacy</a></li>
                        <li><a href="#!">Terms</a></li>
                        <li><a href="#!">Help</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5 className="footer-heading">Support</h5>
                    <ul>
                        <li><a href="#!">Help Center</a></li>
                        <li><a href="#!">Cancellation Options</a></li>
                        <li><a href="#!">Trust & Safety</a></li>
                        <li><a href="#!">Accessibility</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5 className="footer-heading">Community</h5>
                    <ul>
                        <li><a href="#!">Diversity & Belonging</a></li>
                        <li><a href="#!">Airbnb.org</a></li>
                        <li><a href="#!">Community Center</a></li>
                        <li><a href="#!">Neighborhood Support</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                <div className="footer-legal">
                    <p>© 2024 Airbnb, Inc.</p>
                    <p className="footer-dot-separator">Term</p>
                    <p className="footer-dot-separator">Sitemap</p>
                    <p className="footer-dot-separator">Privacy</p>
                    <p className="footer-dot-separator">Your Privacy Choices</p>
                </div>
                <div className="footer-social">
                    <a href="#!" className="social-icon"><FaFacebookF /></a>
                    <a href="#!" className="social-icon"><FaTwitter /></a>
                    <a href="#!" className="social-icon"><FaInstagram /></a>
                    <a href="#!" className="social-icon"><FaPinterestP /></a>
                    <a href="#!" className="social-icon"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;