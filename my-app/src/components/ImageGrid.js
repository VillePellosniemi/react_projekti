import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';
import {
  OpenWith,
  Settings,
  Delete,
  /*Photo,
  VideoLabel,
  Audiotrack,*/
} from '@material-ui/icons';
import {getFilters, getSingleMedia} from '../utils/MediaAPI';
import './css/ImageGrid.css';
import ModalImage from 'react-modal-image'

const getFiltersToGrid = (tile) => {
  const filters = {
    brightness: 100,
    contrast: 100,
    warmth: 0,
    saturation: 100,
  };
  const {brightness, contrast, saturation, warmth} = getFilters(
      tile.description, filters);
  const f = {filter: `brightness(${brightness}%) contrast(${contrast}%) sepia(${warmth}%) saturate(${saturation}%)`};
  return f;
};

class ImageGrid extends React.Component {
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  state = {
    file: 'http://placekitten.com/200/200',
  };


  render () {
    return (
        <div id="kuvat">
          <GridList cols={4}>
            {this.props.picArray.map(tile => (
                <GridListTile key={tile.file_id}>
                  {tile.media_type === 'image' &&
                  <img src={this.mediaUrl + tile.thumbnails.w160} alt={tile.title}
                       style={getFiltersToGrid(tile)}/>
                  }
                  {tile.media_type === 'video' &&
                  <img src={this.mediaUrl + tile.screenshot} alt={tile.title}/>
                  }
                  {tile.media_type === 'audio' &&
                  <img src="http://placekitten.com/400/400" alt={tile.title}/>
                  }
                  <GridListTileBar
                      title={tile.title}
                      actionIcon={
                        <React.Fragment>
                          {/*<IconButton>
                          {tile.media_type === 'image' &&
                          <Photo style={{color: 'whitesmoke'}}/>
                          }
                          {tile.media_type === 'video' &&
                          <VideoLabel style={{color: 'whitesmoke'}}/>
                          }
                          {tile.media_type === 'audio' &&
                          <Audiotrack style={{color: 'whitesmoke'}}/>
                          }
                        </IconButton>*/}

                          <ModalImage
                              large={this.mediaUrl + this.state.file.filename + this.state.file.title}
                              alt={"tet"}
                          />
                          {this.props.edit &&
                          <React.Fragment>
                            <IconButton component={Link}
                                        to={'modify/' + tile.file_id}>
                              <Settings style={{color: 'whitesmoke'}}/>
                            </IconButton>
                            <IconButton onClick={() => {
                              this.props.deleteFile(tile.file_id);
                            }}>
                              <Delete style={{color: 'whitesmoke'}}/>
                            </IconButton>
                          </React.Fragment>}
                        </React.Fragment>
                      }
                  />
                </GridListTile>
            ))}
          </GridList>
        </div>
    );
  }
}

ImageGrid.propTypes = {
  match: PropTypes.object,
  picArray: PropTypes.array,
  edit: PropTypes.bool,
  deleteFile: PropTypes.func,
};

export default ImageGrid;
