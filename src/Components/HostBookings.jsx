// src/components/HostBookings.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/HostBookings.css';
const HostBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/admin-bookings/bookings`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="host-bookings-container">
      <h1 className="host-bookings-title">Your Bookings</h1>
      {bookings.length > 0 ? (
        <table className="host-bookings-table">
          <thead>
            <tr>
              <th>Listing</th>
              <th>Location</th>
              <th>Guest Name</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Number of Guests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.listingId?.title}</td>
                <td>{booking.listingId?.location}</td>
                <td>{booking.guestName}</td>
                <td>{new Date(booking.checkIn).toLocaleDateString()}</td>
                <td>{new Date(booking.checkOut).toLocaleDateString()}</td>
                <td>{booking.numGuests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-bookings-message">
          No bookings found for your listings.
        </p>
      )}
    </div>
  );
};

export default HostBookings;
