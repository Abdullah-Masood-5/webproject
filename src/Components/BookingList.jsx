import  { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/BookingList.css";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('token');
      
      try {
        const res = await axios.get('http://localhost:5000/api/bookings/get-bookings', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBookings(res.data);
      } catch {
        setError('Failed to fetch bookings');
      }
    };

    fetchBookings();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="booking-list-container">
      <h2 className="booking-list-title">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div key={booking._id} className="booking-item">
              <h3 className="booking-list-title">{booking.listingId.title}</h3>
              <img
                src={`http://localhost:5000/${booking.listingId.images[0]}`}
                className="image-listing"
                alt={booking.listingId.title}
              />
              <p>Location: {booking.listingId.location}</p>
              <p>Price: {booking.listingId.price} per night</p>
              <p>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</p>
              <p>
                Check-out: {new Date(booking.checkOut).toLocaleDateString()}
              </p>
              <p>Total Price: {booking.totalPrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingList;
