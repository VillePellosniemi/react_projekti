import React from 'react';
// import Table from '../components/Table';
import PropTypes from 'prop-types';
import ImageGrid from '../components/ImageGrid';
import Upload from "./Upload";

const Front = (props) => {
  const {picArray} = props;
  return (
      <React.Fragment>
        {/* <Table picArray={picArray}/> */}
        <ImageGrid picArray={picArray}/>
        <Upload />
      </React.Fragment>
  );
};

Front.propTypes = {
  picArray: PropTypes.array,
};

export default Front;
