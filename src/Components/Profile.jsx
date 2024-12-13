import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Profile.css';
const Profile = () => {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    dob: '',
    contact: '',
    bio: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${
            import.meta.env.VITE_API_BASE_URL
          }/api/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data);
      setFormData({ dob: res.data.dob, contact: res.data.contact, bio: res.data.bio });
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.put(`${
            import.meta.env.VITE_API_BASE_URL
          }/api/profile`, formData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Profile updated successfully');
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <p className="profile-username">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="profile-email">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="profile-role">
        <strong>Role:</strong> {user.role}
      </p>

      <form onSubmit={handleSubmit} className="profile-form">
        <label className="profile-label">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob || ""}
          onChange={handleChange}
          className="profile-input"
        />

        <label className="profile-label">Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact || ""}
          onChange={handleChange}
          className="profile-input"
        />

        <label className="profile-label">Bio</label>
        <textarea
          name="bio"
          value={formData.bio || ""}
          onChange={handleChange}
          className="profile-textarea"
        />

        <button type="submit" className="profile-update-button">
          Update Profile
        </button>
      </form>
    </div>
  );
};
export default Profile;
