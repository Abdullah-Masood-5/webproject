import React, { useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import "../Styles/SearchListings.css";

const SearchListings = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [results, setResults] = useState([]);
 
  const handleSearch = async (e) => {
    e.preventDefault();
    setResults([]); // Clear previous results
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/listings/search`,
        {
          params: { type, title, category },
        }
      );
      setResults(response.data); // Set the new search results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search-container">
      <h2 className="search-title">Search Listings</h2>
      <p className="search-description">
        Search by <span className="highlight">type</span>,{" "}
        <span className="highlight">title</span>, or{" "}
        <span className="highlight">category</span>. Only one field is required.
      </p>

      <form onSubmit={handleSearch} className="search-form">
        <div className="input-group">
          <label className="input-label">Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="input-field"
            placeholder="Type (optional)"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
            placeholder="Title (optional)"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field"
            placeholder="Category (optional)"
          />
        </div>

        <button type="submit" className="search-button">
          <AiOutlineSearch />
        </button>
      </form>

      <div className="listings-grid">
        {results.map((listing) => (
          <div
            key={listing.id}
            onClick={() => (window.location.href = `/listing/${listing.id}`)}
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
                <span className="rating-label">Rating</span>
                {listing.rating} <FaStar size={22} className="star-icon" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default SearchListings;
