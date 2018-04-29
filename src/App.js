import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar  />

        <Body />

        <Footer />
      </div>
    );
  }
}

export default App;
