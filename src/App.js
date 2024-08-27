// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroductionContainer from './containers/IntroductionContainer';
import PhotoGalleryContainer from './containers/PhotoGalleryContainer';
import FormContainer from './containers/FormContainer';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log("App component mounted");
  }

  componentDidUpdate() {
    console.log("App component updated");
  }

  componentWillUnmount() {
    console.log("App component will unmount");
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<IntroductionContainer />} />
              <Route path="/gallery" element={<PhotoGalleryContainer />} />
              <Route path="/form" element={<FormContainer />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </Router>
    );
  }
}

export default App;
