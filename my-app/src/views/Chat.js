import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import './css/Images.css';
import '../App.css';
import ChatPotApp from './ChatPotApp';

const Chat = (props) => {
  return (
      <React.Fragment>
        <Grid item sm={12}>
          <ChatPotApp/>
        </Grid>
      </React.Fragment>
  );
};

Chat.propTypes = {
  picArray: PropTypes.array,
};

export default Chat;
