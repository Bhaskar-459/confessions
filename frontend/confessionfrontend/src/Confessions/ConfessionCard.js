import React from 'react';
import './ConfessionCard.css';

const ConfessionCard = ({ data }) => {
  return (
    <div className="confession-card">
      <h2 className="confession-title">Message from Anonymous</h2>
      <p className="confession-message">{data.message}</p>
    </div>
  );
};

export default ConfessionCard;

