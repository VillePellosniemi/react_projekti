import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './css/Nav.css';
import {Home, ExitToApp, VideoLibrary, Person, Menu, Description, Chat} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer/Drawer';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
  },
  drawerPaper: {
    width: '35%',
  },
};

class ButtonAppBar extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const {classes} = this.props;

    const sideList = (
        <div className={classes.list}>
          <List>
            <ListItem style={{padding:20, marginTop: -10}} button component={Link} to="/home">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItem>
            {this.props.checkLogin() &&
            <React.Fragment>
              <ListItem style={{padding:20}} button component={Link} to="/chat">
                <ListItemIcon>
                  <VideoLibrary/>
                </ListItemIcon>
                <ListItemText primary="Chat"/>
              </ListItem>
              <ListItem style={{padding:20}} button component={Link} to="/profile">
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText primary="Profile"/>
              </ListItem>
              <ListItem style={{padding:20}} button component={Link} to="/my-files">
                <ListItemIcon>
                  <Description/>
                </ListItemIcon>
                <ListItemText primary="My Files"/>
              </ListItem>
              <ListItem style={{padding:20}} button component={Link} to="/logout">
                <ListItemIcon>
                  <ExitToApp/>
                </ListItemIcon>
                <ListItemText primary="Logout"/>
              </ListItem>
            </React.Fragment>
            }
            {!this.props.checkLogin() &&
            <ListItem style={{padding:20}} button component={Link} to="/">
              <ListItemIcon>
                <ExitToApp/>
              </ListItemIcon>
              <ListItemText primary="Login"/>
            </ListItem>
            }
          </List>
        </div>
    );

    return (
        <div className={classes.root}>
          <AppBar id="appbar" position="static">
            <Toolbar>
              <IconButton id="menu" onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                <Menu />
              </IconButton>
              <Drawer type="temporary"
                      classes={{
                        paper: classes.drawerPaper,
                      }} open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                >
                  {sideList}
                </div>
              </Drawer>
              <h1 id="header">Masentaa!</h1>
              <Typography variant="h6" color="inherit"
                          className={classes.grow}/>
              <Button color="inherit" button component={Link} to="/home"
                      className="hidden"><Home/>Home</Button>
              <Button color="inherit" button component={Link} to="/home"
                      className="hidden"><Home/>Home</Button>
              <Button style={{margin: 10}} color="inherit" button
                      component={Link} to="/home"
                      className="link"><Home/>Home</Button>
              {this.props.checkLogin() &&
              <React.Fragment>
                <Button style={{margin: 10}} color="inherit" button
                        component={Link} to="/chat"
                        className="link"><Chat/>Chat</Button>
                <Button style={{margin: 10}} color="inherit" button
                        component={Link} to="/profile"
                        className="link"><Person/>Profile</Button>
                <Button style={{margin: 10}} color="inherit" button
                        component={Link} to="/my-files"
                        className="link"><VideoLibrary/>Files</Button>
                <Button style={{margin: 10}} color="inherit" button
                        component={Link} to="/logout"
                        className="link"><ExitToApp/>Logout</Button>
              </React.Fragment>
              }
              {!this.props.checkLogin() &&
              <React.Fragment>
                <Button style={{margin: 10}} color="inherit" button
                        component={Link} to="/" className="link"><ExitToApp/>Login</Button>
              </React.Fragment>
              }
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}

ButtonAppBar.propTypes = {
  checkLogin: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
