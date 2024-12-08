import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-heading">Airbnb</h4>
          <ul>
            <li>
              <a href="#!">About Us</a>
            </li>
            <li>
              <a href="#!">Become a Host</a>
            </li>
            <li>
              <a href="#!">Host your home</a>
            </li>
            <li>
              <a href="#!">Host an Online Experience</a>
            </li>
            <li>
              <a href="#!">Resource Center</a>
            </li>
            <li>
              <a href="#!">Careers</a>
            </li>
            <li>
              <a href="#!">Privacy</a>
            </li>
            <li>
              <a href="#!">Terms</a>
            </li>
            <li>
              <a href="#!">Help</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Support</h4>
          <ul>
            <li>
              <a href="#!">Help Center</a>
            </li>
            <li>
              <a href="#!">Cancellation Options</a>
            </li>
            <li>
              <a href="#!">Trust & Safety</a>
            </li>
            <li>
              <a href="#!">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Community</h4>
          <ul>
            <li>
              <a href="#!">Diversity & Belonging</a>
            </li>
            <li>
              <a href="https://www.airbnb.org/?locale=en-GB" target="_blank">
                Airbnb.org emergency stays
              </a>
            </li>
            <li>
              <a href="#!">Community Center </a>
            </li>
            <li>
              <a href="#!">Neighborhood Support</a>
            </li>
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
          <a
            href="https://www.facebook.com/airbnb"
            className="social-icon"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/airbnb"
            className="social-icon"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/airbnb/"
            className="social-icon"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
