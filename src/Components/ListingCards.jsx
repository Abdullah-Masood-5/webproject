import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "../Styles/Listingcards.css"; // Import the CSS file

// ListingCard Component to display each listing
const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <img
        src={listing.image}
        alt={listing.title}
        className="listing-image"
      />
      <div className="listing-details">
        <h2 className="listing-card-title">{listing.title}</h2>
        <p className="listing-card-type">{listing.type}</p>
        <p className="listing-card-guests">Guests: {listing.guests}</p>
        <p className="listing-card-price">${listing.price} / night</p>
        <p className="listing-card-rating">Rating: {listing.rating} ⭐</p>
      </div>
    </div>
  );
};

// ListingsGrid Component to fetch data and display cards
const ListingsGrid = ({ category }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
          // Use environment variable for the API base URL
          console.log(process.env);
          const serverUrl = process.env.REACT_APP_SERVER_PORT;
          console.log(serverUrl);

        let url = `${serverUrl}/api/listings`; // Default API endpoint for getting all listings
        if (category) {
          url = `${serverUrl}/api/listings/search?query=${category}`; // API endpoint for filtered listings by category
        }

        // Fetch listings from the server using Axios
        const response = await axios.get(url);
        setListings(response.data); // Update the state with the fetched data
      } catch (err) {
        // If there's an error, handle it and set the error state
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false); // Stop the loading state after data is fetched
      }
    };

    fetchListings();
  }, [category]); // Re-fetch listings when the category changes

  // If the data is still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, show an error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="listings-grid">
      {/* Iterate over listings and render a ListingCard for each one */}
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsGrid;
