// src/components/Introduction.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Introduction.css'; // Import the CSS file

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="text">
        <h1>Your Photography Journey Begins Here</h1>
        <p>Discover the beauty through our lens...</p>
        <p>Capture moments, tell stories, and create memories that last a lifetime.</p>
        <Link to="/gallery">
          <button className="explore-button">Explore Now</button>
        </Link>
      </div>
      <div className="image">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240122102536/1-(3).jpg" alt="Introduction" />
      </div>
    </div>
  );
};

export default Introduction;
