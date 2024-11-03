import React, { useState } from 'react';
import './UserDetails.css'; // Import the CSS file

const UserDetails = () => {
  const username = localStorage.getItem('username');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false); 

  const apiurl = process.env.REACT_APP_API_URL;

  // Function to handle password change
  const handleChangePassword = async () => {
    try {
      const response = await fetch(`${apiurl}/api/login/changepassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          password: oldPassword,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password changed successfully!');
        setNewPassword(''); // Clear input after successful change
        setOldPassword(''); // Clear old password input after successful change
        setIsEditing(false); // Exit editing mode
      } else {
        setMessage(data.message || 'Failed to change password.');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p>Username: {username}</p>
      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>Change Password</button>
      ) : (
        <div className="change-password">
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter old password"
            required
          />
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />
          <button onClick={handleChangePassword}>Submit</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UserDetails;
