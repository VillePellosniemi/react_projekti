import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './css/Nav.css';
import {Home, AddBox, ExitToApp, VideoLibrary, Person, Menu, } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

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
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <Menu id="menu"/>
            </IconButton>
            <h1 id="header">Masennus</h1>
            <Typography variant="h6" color="inherit" className={classes.grow}/>
            <Button color="inherit" button component={Link} to="/home" className="hidden"><Home/>Home</Button>
            <Button color="inherit" button component={Link} to="/home" className="hidden"><Home/>Home</Button>
            <Button style={{padding: 15}} color="inherit" button component={Link} to="/home" className="link"><Home/>Home</Button>
            {props.checkLogin() &&
                <React.Fragment>
                  <Button style={{padding: 15}} color="inherit" button component={Link} to="/upload" className="link"><AddBox/>Upload</Button>
                  <Button style={{padding: 15}} color="inherit" button component={Link} to="/video" className="link"><VideoLibrary/>Videos</Button>
                  <Button style={{padding: 15}} color="inherit" button component={Link} to="/profile" className="link"><Person/>Profile</Button>
                  <Button style={{padding: 15}} color="inherit" button component={Link} to="/logout" className="link"><ExitToApp/>Logout</Button>
                </React.Fragment>
            }
            {!props.checkLogin() &&
              <React.Fragment>
                <Button style={{padding: 15}} color="inherit" button component={Link} to="/" className="link"><ExitToApp/>Login</Button>
              </React.Fragment>
            }
          </Toolbar>
        </AppBar>
      </div>
  );
}

ButtonAppBar.propTypes = {
  checkLogin: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
