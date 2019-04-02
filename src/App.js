import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="content">
        <Navigation color={'#000000'}  />
        <Main />
      </section>
    );
  }
}

export default App;
