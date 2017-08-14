import React, { Component } from 'react';
import './App.css';
import PodOne from './components/PodOne';
import PodTwo from './components/PodTwo';
import PodThree from './components/PodThree';
import PodFour from './components/PodFour';
import PodFive from './components/PodFive';
import PodSix from './components/PodSix';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PodOne />
        <PodTwo />
        <PodThree />
        <PodFour />
        <PodFive />
        <PodSix />
      </div>
    );
  }
}

export default App;
