import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PodOne from './components/PodOne';
import PodTwo from './components/PodTwo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PodOne />
        <PodTwo />
      </div>
    );
  }
}

export default App;
