import React, { Component } from 'react';
import './App.css';
import PodOne from './components/PodOne';
import PodTwo from './components/PodTwo';
import PodThree from './components/PodThree';
import PodFive from './components/PodFive';
import PodSix from './components/PodSix';
import PodSeven from './components/PodSeven';
import PodEight from './components/PodEight';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PodOne />
        <PodTwo />
        <PodThree />
        <PodFive />
        <PodSix />
        <PodSeven />
        <PodEight />
      </div>
    );
  }
}

export default App;
