import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import './css/Chat.css';
import ChatPotApp from './ChatPotApp';

const section = {
  height: "665px",
};

const Chat = () => {
  return (
      <React.Fragment id="chat-kokosivu">
        <Grid item xs={4} md={12}>
          <div style={section}><ChatPotApp/></div>
        </Grid>
      </React.Fragment>
  );
};


export default Chat;
