import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/HostDashboard.css";
const HostDashboard = () => {
  const [listings, setListings] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "",
    images: [], // This will hold the new images for upload
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/listings`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setListings(res.data);
    };

    fetchListings();
  }, []);

  // Set form data for editing a listing
  useEffect(() => {
    if (editId) {
      const listingToEdit = listings.find((listing) => listing._id === editId);
      if (listingToEdit) {
        setFormData({
          title: listingToEdit.title,
          description: listingToEdit.description,
          price: listingToEdit.price,
          location: listingToEdit.location,
          category: listingToEdit.category,
          images: [], // Reset images as new files will be uploaded
        });
      }
    }
  }, [editId, listings]);

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const form = new FormData();

    // Add form fields to the FormData object
    for (let key in formData) form.append(key, formData[key]);

    // Only append images if new ones are selected
    if (formData.images.length > 0) {
      Array.from(formData.images).forEach((file) =>
        form.append("images", file)
      );
    }

    if (editId) {
      // Update the listing
      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/listings/${editId}`,
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } else {
      // Add a new listing
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/listings`,
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    }

    setEditId(null);
    setFormData({
      title: "",
      description: "",
      price: "",
      location: "",
      category: "",
      images: [],
    });
    // Re-fetch listings after submit to get updated data
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/admin/listings`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setListings(res.data);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(
      `${import.meta.env.VITE_API_BASE_URL}/api/admin/listings/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setListings(listings.filter((listing) => listing._id !== id));
  };

  return (
    <div className="host-dashboard-container">
      <h1 className="host-dashboard-title">Your Listings</h1>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="host-dashboard-form"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="host-dashboard-input"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="host-dashboard-input"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="host-dashboard-input"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="host-dashboard-input"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="host-dashboard-input"
        />

        {/* Display current images if editing */}
        {editId &&
          listings.find((listing) => listing._id === editId)?.images.length >
            0 && (
            <div className="host-dashboard-current-images">
              <p>Current Images:</p>
              {listings
                .find((listing) => listing._id === editId)
                .images.map((image, idx) => (
                  <img
                    key={idx}
                    src={`${import.meta.env.VITE_API_BASE_URL}/${image}`}
                    alt={`Listing Image ${idx + 1}`}
                    className="host-dashboard-image"
                  />
                ))}
            </div>
          )}

        {/* Image input field */}
        <input
          type="file"
          name="images"
          multiple
          onChange={handleFileChange}
          className="host-dashboard-file-inputt"
        />
        <button type="submit" className="host-dashboard-button">
          {editId ? "Update Listing" : "Add Listing"}
        </button>
      </form>

      <table className="host-dashboard-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing._id}>
              <td>{listing.title}</td>
              <td>{listing.location}</td>
              <td>{listing.price}</td>
              <td>
                <button
                  onClick={() => setEditId(listing._id)}
                  className="host-dashboard-edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(listing._id)}
                  className="host-dashboard-delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HostDashboard;
