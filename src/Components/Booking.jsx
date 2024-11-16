import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaShieldAlt, FaInfoCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import "../Styles/Booking.css"; // Assuming the CSS file is named Booking.css

const Booking = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const handleBooking = async () => {
    try {
      const data = {
        name,
        phoneNumber,
        title: listing.title,
        category: listing.category,
      };
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/listings/bookings`,
        data
      );
      alert("Booking information submitted successfully");
      setName("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-left">
        <div className="booking-card highlight">
          <h2>Request to book</h2>
          <p className="alert">
            <FaShieldAlt />
            <span>This is a rare find. Bo's place is usually booked.</span>
          </p>
        </div>

        <div className="trip-details">
          <h3>Your trip</h3>
          <div className="detail-row">
            <div>
              <p className="label">Dates</p>
              <p>Jun 25 – Jul 4, 2025</p>
            </div>
            <MdEdit className="edit-icon" />
          </div>
          <div className="detail-row">
            <div>
              <p className="label">Guests</p>
              <p>2 guests</p>
            </div>
            <MdEdit className="edit-icon" />
          </div>
        </div>

        <div className="payment-section">
          <h3>Choose how to pay</h3>
          <div className="payment-card">
            <div className="payment-option">
              <BsCheckCircle className="selected-icon" />
              <p>Pay $1,208.81 now</p>
            </div>
            <div className="payment-option">
              <BsCircle className="default-icon" />
              <div>
                <p>Pay part now, part later</p>
                <p className="payment-info">
                  $604.41 due today, $604.40 on Jun 16, 2025. No extra fees.{" "}
                  <FaInfoCircle className="info-icon" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-section">
          <h3>Log in or sign up to book</h3>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Country code</label>
            <select>
              <option>Pakistan (+92)</option>
            </select>
            <input
              type="number"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p className="privacy-note">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
              <span className="privacy-link">Privacy Policy</span>
            </p>
          </div>
          <button onClick={handleBooking} className="submit-button">
            Continue
          </button>
        </div>
      </div>

      <div className="booking-right">
        {listing && (
          <>
            <div className="listing-info">
              <img src={listing.image} alt={listing.title} />
              <div>
                <h3>{listing.title}</h3>
                <p className="rating">
                  <FaStar className="star-icon" />
                  4.96 (124 reviews) • <FaShieldAlt /> {listing.category}
                </p>
                <p className="type">Room in casa particular</p>
              </div>
            </div>

            <div className="price-details">
              <h3>Price details</h3>
              <div className="price-row">
                <p>$125.88 x 9 nights</p>
                <p>$1,132.90</p>
              </div>
              <div className="price-row discount">
                <p>Weekly stay discount</p>
                <p>-$113.28</p>
              </div>
              <div className="price-row">
                <p>Cleaning fee</p>
                <p>$29.16</p>
              </div>
              <div className="price-row">
                <p>Airbnb service fee</p>
                <p>$160.03</p>
              </div>
              <hr />
              <div className="total">
                <p>Total (USD)</p>
                <p>$1,208.81</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;
