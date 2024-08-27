// src/containers/PhotoGalleryContainer.js
import React, { Component } from 'react';
import PhotoGallery from '../components/PhotoGallery';
import './PhotoGalleryContainer.css'; // Import the CSS file for styling

class PhotoGalleryContainer extends Component {
  state = {
    photos: [
      'https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/1a-(2).jpg',
      'https://media.geeksforgeeks.org/wp-content/uploads/20240122102942/2b.jpg',
      'https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/13.jpg',
      'https://media.geeksforgeeks.org/wp-content/uploads/20240122103211/15.jpg',
      'https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/12.jpg',
      'https://media.geeksforgeeks.org/wp-content/uploads/20240122103210/14.jpg'
    ]
  };

  componentDidMount() {
    console.log("PhotoGalleryContainer mounted");
  }

  componentDidUpdate() {
    console.log("PhotoGalleryContainer updated");
  }

  componentWillUnmount() {
    console.log("PhotoGalleryContainer will unmount");
  }

  render() {
    return (
      <div className="photo-gallery-container">
        <PhotoGallery photos={this.state.photos} />
        <div className="gallery-text">
          <p>"Photography is the story I fail to put into words." – Destin Sparks</p>
          <p>Welcome to the heart of our collection! Here you’ll find a curated selection of our finest shots, each telling its own story and capturing unique moments. Every image in this gallery represents a piece of our journey, showcasing the beauty and diversity we see through the lens.</p>
          <p>Enjoyed our gallery? Stay tuned for more updates and new collections! If you have any inquiries or wish to collaborate, feel free to reach out through our contact page. We’d love to hear your thoughts and discuss how we can work together to create something beautiful.</p>
        </div>
      </div>
    );
  }
}

export default PhotoGalleryContainer;
