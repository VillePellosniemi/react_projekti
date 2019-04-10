import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Front extends Component {

  render() {
    return (
        <h1>Etusivu</h1>
    );
  }
}

Front.propTypes = {
  match: PropTypes.object,
};

export default Front;
