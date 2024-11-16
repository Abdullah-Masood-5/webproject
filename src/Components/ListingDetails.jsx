import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaMedal, FaHome, FaDoorOpen, FaToilet } from "react-icons/fa";
import "../Styles/ListingDetails.css";

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/listings/${id}`
        );
        setListing(response.data);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };
    fetchListing();
  }, [id]);

  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };

  if (!listing) return <div className="loading-container">Loading...</div>;

  return (
    <div className="listing-container">
      <div className="image-grid">
        <div className="main-image">
          <img src={listing.image} alt={listing.title} />
        </div>

        <div className="secondary-images">
          <div className="image-wrapper">
            <img src={listing.image} alt={listing.title} />
          </div>
          <div className="image-wrapper">
            <img src={listing.image} alt={listing.title} />
          </div>
          <div className="image-wrapper">
            <img src={listing.image} alt={listing.title} />
          </div>
          <div className="image-wrapper">
            <img src={listing.image} alt={listing.title} />
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="listing-info">
          <div className="listing-header">
            <h2>{listing.title}</h2>
            <p className="room-info">10000 bed · Shared bathroom</p>
          </div>

          <div className="listing-badges">
            <div className="badge">
              <span className="badge-icon">🏆</span>
              <p>Guest favorite</p>
            </div>
            <div className="badge">
              <span className="badge-icon">🏅</span>
              <p>One of the most loved homes on Airbnb, according to guests</p>
            </div>
            <div className="badge">
              <p className="rating">4.96</p>
              <span>⭐</span>
              <p className="reviews">(1240 Reviews)</p>
            </div>
          </div>

          <div className="host-info">
            <div className="host-avatar">
              <div className="avatar-placeholder"></div>
            </div>
            <div className="host-details">
              <p className="host-name">Host</p>
              <p className="host-status">Superhost · 3 years hosting</p>
            </div>
          </div>

          <div className="amenities">
            <div className="amenity-item">
              <FaMedal className="amenity-icon medal" />
              <div className="amenity-details">
                <p className="amenity-title">Top 5% of homes</p>
                <p className="amenity-description">
                  This home is highly ranked based on ratings, reviews, and
                  reliability.
                </p>
              </div>
            </div>

            <div className="amenity-item">
              <FaHome className="amenity-icon" />
              <div className="amenity-details">
                <p className="amenity-title">Room in a casa particular</p>
                <p className="amenity-description">
                  Your own room in a home, plus access to shared spaces.
                </p>
              </div>
            </div>

            <div className="amenity-item">
              <FaDoorOpen className="amenity-icon" />
              <div className="amenity-details">
                <p className="amenity-title">Shared common spaces</p>
                <p className="amenity-description">
                  You'll share parts of the home with the Host.
                </p>
              </div>
            </div>

            <div className="amenity-item">
              <FaToilet className="amenity-icon" />
              <div className="amenity-details">
                <p className="amenity-title">Shared bathroom</p>
                <p className="amenity-description">
                  You'll share the bathroom with others.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h3>About this place</h3>
            <p>
              Inner City - Private room in a prestigious area with double bed
              and double closet in spacious apartment in Store Kongesgade. 2
              mins away from Queens Palace, Nyhavn and Kongens Nytorv. Metro 2
              mins away (Marmorkirken). The apartment is close to all top
              restaurants and high-street shops. Perfect for 1 or 2 people. Flat
              is 170 SQM and you have access to all areas including 1 toilet...
            </p>
          </div>
        </div>

        <div className="booking-section">
          <div className="booking-card">
            <div className="price-header">
              <p className="price">$111</p>
              <p className="price-period">/ night</p>
            </div>

            <div className="date-picker">
              <div className="date-grid">
                <div className="date-item">
                  <p className="date-label">CHECK-IN</p>
                  <p className="date-value">6/25/2025</p>
                </div>
                <div className="date-item">
                  <p className="date-label">CHECKOUT</p>
                  <p className="date-value">7/4/2025</p>
                </div>
              </div>
              <div className="guests-selector">
                <div className="guests-info">
                  <p className="guests-label">GUESTS</p>
                  <p className="guests-value">2 guests</p>
                </div>
                <span className="dropdown-icon">▼</span>
              </div>
            </div>

            <button
              onClick={() => handleBooking(id)}
              className="reserve-button"
            >
              Reserve
            </button>

            <p className="charge-notice">You won't be charged yet</p>

            <div className="price-breakdown">
              <div className="price-item">
                <p>$111 x 5 nights</p>
                <p>$554</p>
              </div>
              <div className="price-item">
                <p>Cleaning fee</p>
                <p>$29</p>
              </div>
              <div className="price-item">
                <p>Airbnb service fee</p>
                <p>$89</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="total-price">
              <p>Total before taxes</p>
              <p>$672</p>
            </div>
          </div>

          <div className="rare-find-card">
            <p className="rare-find-title">This is a rare find</p>
            <p className="rare-find-description">
              Bo's place is usually fully booked.
            </p>
          </div>

          <div className="report-listing">
            <button>Report this listing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
