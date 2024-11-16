import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaSearch,
  FaSlidersH,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuGlobe } from "react-icons/lu";
import airbnb from "../logo.svg";
import "../Styles/Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [homePath, setHomePath] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setHomePath(location.pathname === "/");
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="navbar-header">
      <nav className="navbar-desktop">
        <div
          className={`navbar-container ${
            location.pathname === "/" ? "home-path" : "other-path"
          }`}
        >
          <div className="navbar-content">
            <div className="logo-container">
              <img src={airbnb} alt="" className="logo-image" />
              <NavLink to="/" className="logo-text">
                airbnb
              </NavLink>
            </div>

            {!homePath ? (
              <div className="search-bar-container">
                <p className="search-item border-right">Anywhere</p>
                <p className="search-item border-right">Any week</p>
                <p className="search-item">Any Guests</p>
                <AiOutlineSearch className="search-icon" />
              </div>
            ) : (
              <>
                {showSearchBar ? (
                  <div className="search-bar-container">
                    <p className="search-item border-right">Anywhere</p>
                    <p className="search-item border-right">Any week</p>
                    <p className="search-item">Any Guests</p>
                    <AiOutlineSearch className="search-icon" />
                  </div>
                ) : (
                  <div className="nav-links">
                    <NavLink to="/stays" className="nav-link">
                      Stays
                    </NavLink>
                    <NavLink to="/experiences" className="nav-link">
                      Experiences
                    </NavLink>
                  </div>
                )}
              </>
            )}

            <div className="user-controls">
              <span className="host-text">Airbnb Your Home</span>
              <button className="globe-button">
                <LuGlobe className="globe-icon" />
              </button>
              <div onClick={toggleMenu} className="user-menu">
                <div className="hamburger-desktop">
                  <GiHamburgerMenu className="hamburger-icon" />
                </div>
                <div className="hamburger-mobile">
                  <button onClick={toggleMenu}>
                    {isOpen ? (
                      <FaTimes className="close-icon" />
                    ) : (
                      <FaBars className="menu-icon" />
                    )}
                  </button>
                </div>
                <FaUserCircle className="user-icon" />
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="dropdown-menu-desktop">
              <div className="dropdown-content">
                <NavLink to="/" className="dropdown-item">
                  Sign up
                </NavLink>
                <NavLink to="/" className="dropdown-item">
                  Log in
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="/" className="dropdown-item">
                  Gift Cards
                </NavLink>
                <NavLink to="/" className="dropdown-item">
                  Airbnb Your Home
                </NavLink>
                <NavLink to="/" className="dropdown-item">
                  Host an Experience
                </NavLink>
                <NavLink to="/" className="dropdown-item">
                  Help Center
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      <nav className="navbar-mobile">
        <div className="mobile-search-container">
          <div className="mobile-search-bar">
            <FaSearch className="mobile-search-icon" />
            <div className="mobile-search-text">
              <div className="mobile-search-placeholder">Where to?</div>
            </div>
          </div>
          <div className="mobile-filter">
            <button className="filter-button">
              <FaSlidersH onClick={toggleMenu} className="filter-icon" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-dropdown">
            <div className="mobile-dropdown-content">
              <NavLink to="/" className="mobile-dropdown-item">
                Sign up
              </NavLink>
              <NavLink to="/" className="mobile-dropdown-item">
                Log in
              </NavLink>
              <div className="mobile-dropdown-divider"></div>
              <NavLink to="/" className="mobile-dropdown-item">
                Gift Cards
              </NavLink>
              <NavLink to="/" className="mobile-dropdown-item">
                Airbnb Your Home
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
