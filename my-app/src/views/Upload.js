import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Button, CircularProgress} from '@material-ui/core';
import './css/Upload.css';
import ImageEditor from '../components/ImageEditor';
import {upload} from '../utils/MediaAPI';

class Upload extends Component {
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/';
  fr = new FileReader();

  componentDidMount() {
    this.fr.addEventListener('load', () => {
      this.setState((prevState) => ({
        ...prevState,
        imageData: this.fr.result,
      }));
    });
  }

  state = {
    file: {
      title: '',
      description: '',
      filedata: null,
      filename: undefined,
    },
    loading: false,
    imageData: null,
    filters: {
      brightness: 100,
      contrast: 100,
      warmth: 0,
      saturation: 100,
    },
    type: '',
  };

  handleFileChange = (evt) => {
    evt.persist();
    console.log(evt.target.files[0]);
    this.fr.readAsDataURL(evt.target.files[0]);
    this.setState((prevState) => ({
      ...prevState,
      type: evt.target.files[0].type,
      file: {
        ...prevState.file,
        filedata: evt.target.files[0],
      },
    }));
  };

  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    console.log(value, name);

    this.setState((prevState) => ({
      file: {
        ...prevState.file,
        [name]: value,
      },
    }));
  };

  handleFileSubmit = (evt) => {
    console.log(evt);
    this.setState({loading: true});
    const fd = new FormData();
    fd.append('title', this.state.file.title);
    const description = `[d]${this.state.file.description}[/d][f]${JSON.stringify(
        this.state.filters)}[/f]`;
    fd.append('description', description);
    fd.append('file', this.state.file.filedata);

    upload(fd, localStorage.getItem('token')).then(json => {
      console.log(json);
      setTimeout(() => {
        this.props.history.push('/home');
        this.props.updateImages();
        this.setState({loading: false});
      }, 2000);

    })
  };

  updateFilters = (newFilters) => {
    this.setState((prevState) => ({
      filters: newFilters,
    }));
  };

  render() {
    return (
        <div id="upload">
          <React.Fragment>
            <h1 id="up">Upload a File</h1>
            <form id="uploaddiv">
              <ValidatorForm instantValidate={false}
                             onSubmit={this.handleFileSubmit}
                             onError={errors => console.log(errors)}>
                <TextValidator style={{marginTop: -5}} name="title" label="Title" id="title"
                               value={this.state.file.title}
                               onChange={this.handleInputChange}
                               validators={['required', 'minStringLength:3']}
                               errorMessages={[
                                 'this field is required',
                                 'minimum 3 charaters']}
                               fullWidth/>
                <TextValidator style={{marginTop: 5, marginBottom: 5}} name="description" label="Description"
                               id="description"
                               value={this.state.file.description}
                               onChange={this.handleInputChange}
                               validators={['required', 'minStringLength:3']}
                               errorMessages={[
                                 'this field is required',
                                 'minimum 3 charaters']}
                               fullWidth
                               multiline/>
                <input name="filedata" id="file"
                           value={this.state.file.filename}
                           type="file"
                           onChange={this.handleFileChange}/><br/>
                <Button id="button1" type="submit" variant="contained"
                        color="primary">Upload&nbsp;&nbsp;{this.state.loading &&
                <CircularProgress size={20} color="secondary"/>}</Button>
              </ValidatorForm>
            </form>
          </React.Fragment>
          <React.Fragment>
            <div id="preview2">
              {this.state.imageData !== null &&
              this.state.type.includes('image') &&
              <ImageEditor state={this.state}
                           updateFilters={this.updateFilters}/>
              }
            </div>
          </React.Fragment>
        </div>

    );
  }
}

Upload.propTypes = {
  history: PropTypes.object,
  updateImages: PropTypes.func,
};

export default Upload;
