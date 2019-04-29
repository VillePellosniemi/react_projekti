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
        <div id="gallery">
        <Grid item sm={8}>
            <Scrollbars class="scroll" style={{width: 490, height: 500}}>
          <ImageGrid picArray={picArray}/>
            </Scrollbars>
        </Grid>
        </div>
        <Grid item sm={4}>
          <Chatroom />
        </Grid>
          <div>
              <Upload />
          </div>

      </React.Fragment>
  );
};

Front.propTypes = {
  picArray: PropTypes.array,
};

export default Front;
