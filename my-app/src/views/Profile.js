import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import './css/Profile.css';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';


const Profile = (props) => {
  if (props.user === null) {
    return <Redirect to="/"/>;
  }

  const {username, email, full_name} = props.user;
  return (
      <div id="profilecontainer">
        <React.Fragment>
          <Card id="card">
            <h1 className="profile">Your Profile</h1>
            <CardActionArea>
              <CardMedia className="media"
                         image={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'}
                         title={username}/>
              <CardContent>
                <Typography id="profileuser" gutterBottom variant="h5" component="h2">
                  {username}
                </Typography>
                <Typography id="profilecontent" component="p">
                  Email: {email}
                </Typography>
                <Typography id="profilecontent" component="p">
                  Full name: {full_name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </React.Fragment>
      </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
