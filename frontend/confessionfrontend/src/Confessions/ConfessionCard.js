import React from 'react';
import './ConfessionCard.css';

const ConfessionCard = ({ data }) => {
  return (
    <div className="confession-card">
      <h2>Message from Anonymous</h2>
      <p>{data.message}</p>
    </div>
  );
};

export default ConfessionCard;
