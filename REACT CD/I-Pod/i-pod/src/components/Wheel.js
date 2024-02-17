// src/components/Wheel.js
import React from 'react';


const Wheel = () => {
  return (
    <div className="wheel-container">
      <div className="wheel">
        {/* Add divs for wheel options */}
        <div className="option">Settings</div>
        <div className="option">Games</div>
        <div className="option">Music</div>
        {/* Add more options as needed */}
      </div>
    </div>
  );
};

export default Wheel;
