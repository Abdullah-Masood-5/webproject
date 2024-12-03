import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../Styles/ListingDetailsPage.css";

const ListingDetailsPage = () => {
  const [listing, setListing] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      const res = await axios.get(`http://localhost:5000/api/listings/${id}`);
      setListing(res.data);
    };

    const role = localStorage.getItem("role");
    setIsGuest(role === "Guest");

    fetchListing();
  }, [id]);

  if (!listing) return <div>Loading...</div>;

  return (
    <div className="listing-details-container">
      <h1 className="listing-details-title">{listing.title}</h1>
      <div className="image-grid">
        <div className="image-item main-image">
          <img
            src={`http://localhost:5000/${listing.images[0]}`}
            alt={listing.title}
            className="image"
          />
        </div>
        <div className="image-item">
          <img
            src={`http://localhost:5000/${listing.images[0]}`}
            alt={listing.title}
            className="image"
          />
        </div>
        <div className="image-item">
          <img
            src={`http://localhost:5000/${listing.images[0]}`}
            alt={listing.title}
            className="image"
          />
        </div>
      </div>

      <p className="listing-details-description">{listing.description}</p>
      <p className="listing-details-location">Location: {listing.location}</p>
      <p className="listing-details-price">Price: {listing.price} per night</p>

      {isGuest && (
        <Link to={`/book/${listing._id}`} className="booking-link">
          <button className="booking-button">Book Now</button>
        </Link>
      )}
    </div>
  );
};

export default ListingDetailsPage;
