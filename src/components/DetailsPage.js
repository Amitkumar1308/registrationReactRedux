import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/userSlice';
import './DetailsPage.css';

const DetailsPage = () => {
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Clear user data
    navigate('/');      // Redirect to registration page
  };

  if (!userData) {
    return <p>No user data available. Please register first.</p>;
  }

  return (
    <div className="details-container">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Gender:</strong> {userData.gender}</p>
      <p><strong>Role:</strong> {userData.role}</p>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default DetailsPage;
