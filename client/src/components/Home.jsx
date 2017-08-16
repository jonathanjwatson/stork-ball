import React, { Component } from 'react';
import '../App.css';
import PodOne from './PodOne';
import PodTwo from './PodTwo';
import PodThree from './PodThree';
import PodFive from './PodFive';
import PodSix from './PodSix';
import PodSeven from './PodSeven';
import PodEight from './PodEight';


class Home extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <PodOne />
        <PodTwo />
        <PodThree />
        <PodFive />
        <PodSix />
        <PodSeven />
        <PodEight />
      </div>
      </div>
    );
  }
}

export default Home;
