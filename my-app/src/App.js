import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {getAllMedia, getFilesByTag} from './utils/MediaAPI';
import Front from './views/Front';
import Single from './views/Single';
import Nav from './components/Nav';
import Login from './views/Login';
import Profile from './views/Profile';
import Logout from './views/Logout';
import Grid from '@material-ui/core/Grid';
import Upload from './views/Upload';
import MyFiles from './views/MyFiles';
import Modify from './views/Modify';
class App extends Component {

  state = {
    picArray: [],
    user: null,
  };

  setUser = (user) => {
    getFilesByTag('profile').then((files) => {
      const profilePic = files.filter((file) => {
        let outputFile = null;
        if (file.user_id === this.state.user.user_id) {
          outputFile = file;
        }
        return outputFile;
      });
      this.setState((prevState) => {
        return {
          user: {
            ...prevState.user,
            profilePic: profilePic[0],
          },
        };
      });
    });
    this.setState({user});
  };

  setUserLogout = (user) => {
    this.setState({user});
  };

  checkLogin = () => {
    return this.state.user !== null;
  };

  updateImages = () => {
    getAllMedia().then((pics) => {
      console.log(pics);
      this.setState({picArray: pics});
    });
  };

  componentDidMount() {
    this.updateImages();
  }

  // chattiii
  constructor() {
    super();
    this.drone = new window.Scaledrone("YOUR-CHANNEL-ID", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  render() {
    return (
        <Router basename='/~villeope/my-app'>
          <Grid container>
            <Grid item sm={12}>
              <Nav checkLogin={this.checkLogin}/>
            </Grid>
              <Route path="/home" render={(props) => (
                  <Front {...props} picArray={this.state.picArray}/>
              )}/>
              <Route path="/upload" render={(props) => (
                  <Upload {...props} updateImages={this.updateImages}/>
              )}/>
              <Route path="/videos" render={(props) => (
                  <Profile {...props} user={this.state.videos}/>
              )}/>
              <Route path="/single/:id" component={Single}/>
              <Route path="/modify/:id" component={Modify}/>
              <Route path="/profile" render={(props) => (
                  <Profile {...props} user={this.state.user}/>
              )}/>
              <Route path="/my-files" render={(props) => (
                  <MyFiles {...props} user={this.state.user}/>
              )}/>
              <Route exact path="/" render={(props) => (
                  <Login {...props} setUser={this.setUser}/>
              )}/>
              <Route path="/logout" render={(props) => (
                  <Logout {...props} setUserLogout={this.setUserLogout}/>
              )}/>
          </Grid>
        </Router>
    );
  }
}

export default App;
