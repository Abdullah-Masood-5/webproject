import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Styles/BookingPage.css";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    numGuests: 1,
  });
  const [message, setMessage] = useState("");
  const { id: listingId } = useParams();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/bookings`,
        { ...formData, listingId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message);
    } catch {
      setMessage("Booking failed");
    }
  };

  return (
    <div className="booking-page-container">
      <h2 className="booking-page-title">Book Your Stay</h2>
      <form className="booking-page-form" onSubmit={handleSubmit}>
        <label className="booking-page-labels">Check-in Date: </label>
        <input type="date" name="checkIn" onChange={handleChange} required />

        <label className="booking-page-labels">Check-out Date: </label>
        <input type="date" name="checkOut" onChange={handleChange} required />

        <label className="booking-page-labels">Number of Guests: </label>
        <input
          className="booking-page-input-field"
          type="number"
          name="numGuests"
          onChange={handleChange}
          min="1"
          required
        />

        <button className="booking-page-submit" type="submit">
          Book Now
        </button>
      </form>
      {message && <p className="booking-page-text">{message}</p>}
    </div>
  );
};

export default BookingPage;
