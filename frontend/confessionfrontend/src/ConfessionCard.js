import React from 'react';

const ConfessionCard = ({ data }) => {
  return (
    <div className="confession-card">
      <h2>Message from {data.sender}</h2>
      <p>{data.message}</p>
      <small>To: {data.reciever}</small>
    </div>
  );
};

export default ConfessionCard;
