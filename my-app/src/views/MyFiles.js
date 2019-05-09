import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGrid from '../components/ImageGrid';
import {deleteMedia, getMediaFromUser} from '../utils/MediaAPI';
import Grid from '@material-ui/core/Grid/Grid';
import {Scrollbars} from 'react-custom-scrollbars';
import './css/MyFiles.css';

class MyFiles extends Component {
  state = {
    picArray: [],
  };

  updateUserImages = () => {
    getMediaFromUser(this.props.user.user_id).then((pics) => {
      console.log(pics);
      this.setState({picArray: pics});
    });
  };

  deleteFile = (id) => {
    console.log('delete', id);
    const cnfrm = window.confirm('Delete File?');
    if (!cnfrm) {
      return;
    }

    deleteMedia(id, localStorage.getItem('token')).then(response => {
      this.updateUserImages();
    }).catch(err => {
      console.log(err);
    });

  };

  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/');
    } else {
      this.updateUserImages();
    }
  }

  render() {
    return (
        <div id="myfiles-div">
          <div id="myfiles-content">
            <h1 id="myfiles-header">Your Uploaded Files</h1>
            <Scrollbars class="scroll" style={{height: 500, width: '100%'}}>
              <ImageGrid picArray={this.state.picArray} edit={true}
                       deleteFile={this.deleteFile}/>
            </Scrollbars>
          </div>
        </div>
    );
  }
}

MyFiles.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
};

export default MyFiles;
