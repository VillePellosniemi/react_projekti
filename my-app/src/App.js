import React, { Component } from 'react';
import Nav from './components/Nav';
import Front from './views/Front';
import Login from './views/Login';
import About from './views/About';
import Memes from './views/Memes';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
        <Router basename='/~villeope/my-app'>
          <div className='container'>
            <Grid item sm={12}>
              <Nav />
            </Grid>
            <Grid item sm={12}>
              <Route path="/home" component={Front}/>
              <Route path="/login" component={Login}/>
              <Route path="/about" component={About}/>
              <Route path="/memes" component={Memes}/>
            </Grid>
          </div>
        </Router>
    );
  }
}



export default App;
