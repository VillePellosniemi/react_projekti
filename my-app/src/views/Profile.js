import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    objectFit: 'cover'
  },
};

const Profile = (props) => {
  if (props.user === null) {
    return <Redirect to="/" />;
  }

  const {username, email, full_name} = props.user;
  const { classes } = props;
  return (
      <React.Fragment>
        <h1>Profile</h1>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media}
                       image={mediaUrl} title={username}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {username}
              </Typography>
              <Typography component="p">
                Email: {email}
              </Typography>
              <Typography component="p">
                Full name: {full_name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </React.Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
