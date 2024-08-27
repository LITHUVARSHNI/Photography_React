// src/containers/FormContainer.js
import React, { Component } from 'react';
import Form from '../components/Form';

class FormContainer extends Component {
  componentDidMount() {
    console.log("FormContainer mounted");
  }

  componentDidUpdate() {
    console.log("FormContainer updated");
  }

  componentWillUnmount() {
    console.log("FormContainer will unmount");
  }

  render() {
    return <Form />;
  }
}

export default FormContainer;
