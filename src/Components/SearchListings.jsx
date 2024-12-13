import { useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import "../Styles/SearchListings.css";

const SearchListings = () => {
  const [title, setTitle] = useState(""); // Only title and category state
  const [category, setCategory] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setResults([]); // Clear previous results

    // Prepare the params object for the API request
    const params = {};
    if (title) params.title = title;
    if (category) params.category = category;

    try {
      // Send a GET request to search listings based on title and/or category
      const response = await axios.get(
        `${
            import.meta.env.VITE_API_BASE_URL
          }/api/listings/search`,
        { params }
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
        Search by <span className="highlight">title</span> or{" "}
        <span className="highlight">category</span>. Only one field is required.
      </p>

      <form onSubmit={handleSearch} className="search-form">
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
        {results.length === 0 ? (
          <p>No listings found.</p> // Display message when no results
        ) : (
          results.map((listing) => (
            <div
              key={listing._id} // Use `_id` instead of `id`
              onClick={() => (window.location.href = `/listing/${listing._id}`)}
              className="listing-card"
            >
              <img
                src={listing.images[0]} // Show first image from images array
                loading="lazy"
                alt={listing.title}
                className="listing-image"
              />
              <div className="listing-details">
                <h2 className="listing-title">{listing.title}</h2>
                <p className="listing-category">{listing.category}</p>
                <p className="listing-price">${listing.price} / night</p>
                <p className="listing-rating">
                  <span className="rating-label">Rating</span>
                  {listing.rating} <FaStar size={22} className="star-icon" />
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchListings;
