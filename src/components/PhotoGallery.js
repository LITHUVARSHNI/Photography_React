// src/components/PhotoGallery.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PhotoGallery.css'; // Import the CSS file

const PhotoGallery = ({ photos }) => {
  return (
    <Carousel className="photo-gallery">
      {photos.map((photo, index) => (
        <Carousel.Item key={index}>
          <img
            src={photo}
            alt={`Photo ${index + 1}`}
            className="d-block"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoGallery;
