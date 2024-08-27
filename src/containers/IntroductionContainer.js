// src/containers/IntroductionContainer.js
import React, { Component } from 'react';
import Introduction from '../components/Introduction';

class IntroductionContainer extends Component {
  componentDidMount() {
    console.log("IntroductionContainer mounted");
  }

  componentDidUpdate() {
    console.log("IntroductionContainer updated");
  }

  componentWillUnmount() {
    console.log("IntroductionContainer will unmount");
  }

  render() {
    return <Introduction />;
  }
}

export default IntroductionContainer;
