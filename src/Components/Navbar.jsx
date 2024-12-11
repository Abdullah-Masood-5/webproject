import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { LuGlobe } from "react-icons/lu";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [homePath, setHomePath] = useState(true);
  const location = useLocation(); // Track the location (path)

  // This will re-render the navbar whenever the route changes
  useEffect(() => {
    setHomePath(location.pathname === "/");
  }, [location.pathname]); // Dependency on location.pathname

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Show search bar when scrolled
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  };
  const handleSearch = () => {
    navigate("/search");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
      setUserRole(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setUserRole(null);
    navigate("/signin"); // Redirect to login page
  };

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
              <img src="/favicon.ico" alt="" className="logo-image" />
              <NavLink to="/" className="logo-text">
                airbnb
              </NavLink>
            </div>

            {!homePath ? (
              <div className="search-bar-container">
                <p className="search-item border-right">Anywhere</p>
                <p className="search-item border-right">Any week</p>
                <p className="search-item">Any Guests</p>
                <AiOutlineSearch
                  className="search-icon"
                  onClick={handleSearch}
                />
              </div>
            ) : (
              <>
                {showSearchBar ? (
                  <div className="search-bar-container">
                    <p className="search-item border-right">Anywhere</p>
                    <p className="search-item border-right">Any week</p>
                    <p className="search-item">Any Guests</p>
                    <AiOutlineSearch
                      className="search-icon"
                      onClick={handleSearch}
                    />
                  </div>
                ) : (
                  <div className="nav-links">
                    <NavLink
                      to="#!"
                      className="nav-link"
                      onClick={() => setIsOpen(false)}
                    >
                      Stays
                    </NavLink>
                    <NavLink
                      to="#!"
                      className="nav-link"
                      onClick={() => setIsOpen(false)}
                    >
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
            <div onClick={toggleMenu} className="dropdown-menu-desktop">
              <div className="dropdown-content">
                {/* Conditionally render based on user role */}
                {isLoggedIn && userRole === "Host" && (
                  <>
                    <NavLink to="/hostdashboard" className="dropdown-item">
                      Host Dashboard
                    </NavLink>
                    <NavLink to="/host/bookings" className="dropdown-item">
                      View Your Bookings
                    </NavLink>
                  </>
                )}

                {isLoggedIn && userRole === "Guest" && (
                  <NavLink to="/bookinglist" className="dropdown-item">
                    Booking list
                  </NavLink>
                )}

                {isLoggedIn ? (
                  <>
                    <NavLink to="/profile" className="dropdown-item">
                      Profile
                    </NavLink>
                    <button onClick={handleLogout} className="dropdown-item">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink to="/signup" className="dropdown-item">
                      Sign up
                    </NavLink>
                    <NavLink to="/signin" className="dropdown-item">
                      Sign in
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
