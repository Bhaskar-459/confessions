import React, { useEffect, useState } from 'react';
import ConfessionCard from './ConfessionCard';
import CryptoJS from 'crypto-js'; // Import CryptoJS

const MyConfessions = () => {
  const [confessions, setConfessions] = useState([]);

  // Function to decrypt a message
  const decryptMessage = (encryptedMessage) => {
    const secretKey = 'your-secret-key'; // Use the same key as for encryption
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  // Fetch all confessions from the backend once the component is mounted
  useEffect(() => {
    const fetchConfessions = async () => {
      try {
        let username = localStorage.getItem('username');
        const response = await fetch(`http://localhost:5000/api/recievedmsgs/${username}`);
        const data = await response.json();

        // Decrypt each confession message before updating the state
        if (data.recievedmsgs) {
          const decryptedMessages = data.recievedmsgs.map((confession) => ({
            ...confession,
            message: decryptMessage(confession.message),
          }));
          setConfessions(decryptedMessages);
        }
      } catch (error) {
        console.error('Error fetching confessions:', error);
      }
    };

    fetchConfessions();
  }, []);

  return (
    <div>
      <h1>Confessions</h1>
      {confessions.length > 0 ? (
        confessions.map((confession) => (
          <ConfessionCard key={confession._id} data={confession} />
        ))
      ) : (
        <p>No confessions available.</p>
      )}
    </div>
  );
};

export default MyConfessions;
