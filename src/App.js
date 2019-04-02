import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigation color={'#000000'}  />
    );
  }
}

export default App;
