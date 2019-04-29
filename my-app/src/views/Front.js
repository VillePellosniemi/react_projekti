import React from 'react';
// import Table from '../components/Table';
import PropTypes from 'prop-types';
import ImageGrid from '../components/ImageGrid';
import Upload from "./Upload";
import Chatroom from '../Chatroom';
import Grid from '@material-ui/core/Grid/Grid';
import { Scrollbars } from 'react-custom-scrollbars';

const Front = (props) => {
  const {picArray} = props;
  return (
      <React.Fragment>
        {/* <Table picArray={picArray}/> */}
        <Grid item sm={8}>
            <Scrollbars style={{width: 500, height: 300}}>
          <ImageGrid picArray={picArray}/>
            </Scrollbars>
        </Grid>
        <Grid item sm={4}>
          <Chatroom />
        </Grid>
        <Upload />
      </React.Fragment>
  );
};

Front.propTypes = {
  picArray: PropTypes.array,
};

export default Front;
