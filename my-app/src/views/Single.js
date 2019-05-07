import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/Single.css';
import {getSingleMedia, getFilters, getDescription} from '../utils/MediaAPI';
import {Button} from '@material-ui/core';
import shareContainer from './Share';
import Likes from './Likes';
import Grid from '@material-ui/core/Grid/Grid';

class Single extends Component {
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  state = {
    file: {
      filename: '',
      title: '',
      description: '[d][/d][f][/f]',
      media_type: 'image/jpg',
      user_id: 1,
    },
    filters: {
      brightness: 100,
      contrast: 100,
      warmth: 0,
      saturation: 100,
    },
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    getSingleMedia(id).then(pic => {
      console.log('pic', pic);
      console.log('filters', getFilters(pic.description, this.state.filters));
      this.setState({
        file: pic,
        filters: getFilters(pic.description, this.state.filters),
      }, () => {
        console.log('state', this.state);
      });
    });
  }

  render() {
    const {title, description, filename, media_type} = this.state.file;
    const {brightness, contrast, saturation, warmth} = this.state.filters;
    return (
        <React.Fragment>
          <Grid item sm={8}>
            <Button id="backButton"
                    onClick={this.props.history.goBack}>Back to Home</Button>
            <div className="kuvacontainer">
              {console.log(media_type)}
              <h1 id="test">Title: {title}</h1>
              <p id="test">Description: {getDescription(description)}
              </p>
              {media_type.includes('image') &&
              <img id="image" src={this.mediaUrl + filename}
                   alt={title}
                   style={{filter: `brightness(${brightness}%) contrast(${contrast}%) sepia(${warmth}%) saturate(${saturation}%)`}}
              />
              }
              {media_type.includes('video') &&
              <video id="video" src={this.mediaUrl + filename}
                     controls
              />}
              {media_type.includes('audio') &&
              <audio id="audio" src={this.mediaUrl + filename}
                     controls
              />}
            </div>
          </Grid>
          <Grid item sm={3}>
            <h1 id="test">Jakoon</h1>
            <div id="likes">
              {Likes}
            </div>
            {shareContainer}
          </Grid>
        </React.Fragment>
    );
  }

}

Single.propTypes = {
  match: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object,
};

export default Single;
