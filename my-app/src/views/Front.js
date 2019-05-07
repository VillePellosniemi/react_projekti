import React from 'react';
// import Table from '../components/Table';
import PropTypes from 'prop-types';
import ImageGrid from '../components/ImageGrid';
import Upload from './Upload';
import Grid from '@material-ui/core/Grid/Grid';
import {Scrollbars} from 'react-custom-scrollbars';
import './css/Images.css';
import '../App.css';
import Input from './Input';
import ChatPotApp from './ChatPotApp';

const Front = (props) => {
  const {picArray, messages} = props;
  return (
      <React.Fragment>
        {/* <Table picArray={picArray}/> */}
        <Grid item sm={8}>
          <Scrollbars class="scroll" style={{width: '100%', height: 365, backgroundColor: "#12355b"}}>
            <ImageGrid picArray={picArray}/>
          </Scrollbars>
        </Grid>
        <Grid item sm={4}>
          <ChatPotApp />
        </Grid>
        <div>
          <Upload/>
        </div>
      </React.Fragment>
  );
};

Front.propTypes = {
  picArray: PropTypes.array,
};

export default Front;
