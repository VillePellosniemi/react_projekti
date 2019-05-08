import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageGrid from '../components/ImageGrid';
import {deleteMedia, getMediaFromUser} from '../utils/MediaAPI';
import Grid from '@material-ui/core/Grid/Grid';
import Messages from './Messages';
import {Scrollbars} from 'react-custom-scrollbars';

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
    const cnfrm = window.confirm('Really? Delete?');
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
        <React.Fragment>
          <Grid item sm={8}>
            <h1 style={{color: 'white'}}>Your Uploaded Files</h1>
            <Scrollbars class="scroll" style={{width: '100%', height: 365, backgroundColor: "#12355b"}}>
              <ImageGrid picArray={this.state.picArray} edit={true}
                       deleteFile={this.deleteFile}/>
            </Scrollbars>
          </Grid>
        </React.Fragment>
    );
  }
}

MyFiles.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
};

export default MyFiles;
