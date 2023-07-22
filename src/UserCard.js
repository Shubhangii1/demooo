import React, { useState } from 'react';
import './UserCard.css'; // Create this CSS file for styling the card

const UserCard = ({ user }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`user-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="front">
        <p>Name: {user.first_name} {user.last_name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="back">
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default UserCard;
