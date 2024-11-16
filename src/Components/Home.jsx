import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaStar } from "react-icons/fa";
import HorizontalScrollList from "./HorizontalScrollList";
import "../Styles/Home.css";
const Home = () => {
  const [listings, setListings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/listings`
      );
      setListings(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching listings:", error);
      setListings([]);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/listing/${id}`);
  };

  const handleSearch = () => {
    navigate("/search");
  };

  const filteredListings = selectedCategory
    ? listings.filter((listing) => listing.category === selectedCategory)
    : listings;

  return (
    <div className="home-container">
      <HorizontalScrollList setCategory={setSelectedCategory} />

      <div className="search-bar">
        <button onClick={handleSearch} className="search-button">
          <FaSearch className="search-icon" /> Search Listings
        </button>
      </div>

      <div className="listings-grid">
        {filteredListings.map((listing) => (
          <div
            key={listing.id}
            onClick={() => handleCardClick(listing.id)}
            className="listing-card"
          >
            <img
              src={listing.image}
              loading="lazy"
              alt={listing.title}
              className="listing-image"
            />
            <div className="listing-details">
              <h2 className="listing-title">{listing.title}</h2>
              <p className="listing-type">{listing.type}</p>
              <p className="listing-category">{listing.category}</p>
              <p className="listing-guests">Guests: {listing.guests}</p>
              <p className="listing-price">${listing.price} / night</p>
              <p className="listing-rating">
                <span className="rating-label">Rating:</span>
                <span className="rating-value">{listing.rating}</span>
                <FaStar size={20} className="star-icon" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
