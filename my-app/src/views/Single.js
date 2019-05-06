import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/Single.css';

class Single extends Component {
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  state = {
    file: 'http://placekitten.com/200/200',
  };



  render() {
    return (
        <img id="image" src={this.mediaUrl + this.state.file.filename} alt={this.state.file.title}/>
    );
  }

}

Single.propTypes = {
  match: PropTypes.object,
};

export default Single;
