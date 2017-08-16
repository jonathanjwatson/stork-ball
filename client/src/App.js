import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import UserList from './components/UserList';


class App extends Component {
  render() {
    return (
      <div>
      <div>
      <Router>
        <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/displayUsers/756487930192" component={UserList} />
        </div>
      </Router>
      </div>
      </div>
    );
  }
}

export default App;
