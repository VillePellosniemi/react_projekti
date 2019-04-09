import React, { Component } from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, /*Route*/} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router basename='/~villeope/my-app'>
          <div className='container'>
            <Nav/>
          </div>
        </Router>
    );
  }
}



export default App;
