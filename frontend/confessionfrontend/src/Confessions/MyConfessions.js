import React, { useEffect, useState } from 'react';
import ConfessionCard from './ConfessionCard';

const MyConfessions = () => {
  const [confessions, setConfessions] = useState([]);

  // Fetch all confessions from the backend once the component is mounted
  useEffect(() => {
    const fetchConfessions = async () => {
      try {
        let username = localStorage.getItem('username');
        const response = await fetch(`http://localhost:5000/api/recievedmsgs/${username}`);
        const data = await response.json();

        // Update state with the received messages array
        if (data.recievedmsgs) {
          setConfessions(data.recievedmsgs);
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

