import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {login, register, getUser, checkUser} from '../utils/MediaAPI';
import {TextField, Button} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import red from '@material-ui/core/colors/red';
import {withStyles} from '@material-ui/core/styles';
import './css/Login.css';

const styles = theme => ({
  container: {
    width: '50%',
    padding: '1rem',
  },
  button: {
    marginLeft: 5,
  },
  alert: {
    color: red[500],
  },
});

class Login extends Component {
  state = {
    user: {
      username: '',
      password: '',
      email: '',
      full_name: '',
      repeatPassword: '',
    },
    message: '',
    formToggler: true,
    validUser: true,
  };

  handleLoginSubmit = (evt) => {
    evt.preventDefault();
    this.doLogin();
  };

  handleRegisterSubmit = () => {
    const user = {...this.state.user};
    delete user.repeatPassword;
    register(user).then(user => {
      console.log(user);
      if (user.message !== undefined) {
        this.setState({message: user.message});
        return;
      }
      this.doLogin();
    });
  };

  doLogin = () => {
    login(this.state.user.username, this.state.user.password).then(response => {
      console.log(response);
      if (response.user !== undefined) {
        this.props.setUser(response.user);
        localStorage.setItem('token', response.token);
        this.props.history.push('/home');
      } else {
        this.setState({message: response.message});
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    console.log(value, name);

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,

      },
    }));

    if (name === 'username') {
      this.checkUsername(target.value);
    }
  };

  checkUsername = (username) => {
    checkUser(username).then((result) => {
      console.log(result.available);
      this.setState({validUser: result.available});
    });
  };

  toggleForm = () => {
    this.setState({formToggler: !this.state.formToggler});
  };

  componentDidMount() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') !== null) {
      getUser(localStorage.getItem('token')).then(response => {
        this.props.setUser(response);
        this.props.history.push('/home');
      });
    }
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      return value === this.state.user.password;
    });
    ValidatorForm.addValidationRule('isUserAvailable', () => {
      return this.state.validUser;
    });
  }

  render() {
    const {classes} = this.props;
    return (
        <div className="container">
          {this.state.formToggler &&
          <React.Fragment>
            <form id="login" onSubmit={this.handleLoginSubmit}>
              <h1 className="header">Login</h1>
              <TextField required fullWidth name="username" id="username"
                         label="Username"
                         value={this.state.user.username}
                         onChange={this.handleInputChange}/>
              <br/>
              <TextField required fullWidth name="password" type="password"
                         id="password"
                         label="Password"
                         value={this.state.user.password}
                         onChange={this.handleInputChange}/>
              <br/>
              <Button id="button" variant="contained"
                      type="submit">Login<Send style={{paddingLeft: 6}}/>
              </Button>
              <Button id="button2" variant="contained"
                      onClick={this.toggleForm}>No account yet?<br/>Register here!
              </Button>
              <p className={classes.alert}>
                {this.state.message}
              </p>
            </form>
          </React.Fragment>
          }

          {!this.state.formToggler &&
          <React.Fragment>
            <ValidatorForm id="register" instantValidate={false} onSubmit={this.handleRegisterSubmit}
                           onError={errors => console.log(errors)}>
              <h1 className="header">Register</h1>
              <TextValidator fullWidth required name="username" id="username"
                             label="Username"
                             value={this.state.user.username}
                             onChange={this.handleInputChange}
                             validators={[
                               'required',
                               'minStringLength:3',
                               'isUserAvailable']}
                             errorMessages={[
                               'this field is required',
                               'minimum 3 charaters',
                               'username not available']}/>
              <TextValidator fullWidth required name="password" type="password"
                             id="password"
                             label="Password"
                             value={this.state.user.password}
                             onChange={this.handleInputChange}
                             validators={['required', 'minStringLength:5']}
                             errorMessages={[
                               'this field is required',
                               'minimum 5 characters']}/>
              <TextValidator fullWidth required name="repeatPassword" type="password"
                             id="repeatPassword"
                             label="Repeat password"
                             value={this.state.user.repeatPassword}
                             onChange={this.handleInputChange}
                             validators={['isPasswordMatch', 'required']}
                             errorMessages={[
                               'password mismatch',
                               'this field is required']}/>
              <TextValidator fullWidth required name="email"
                             id="email"
                             label="Email"
                             value={this.state.user.email}
                             onChange={this.handleInputChange}
                             validators={['required', 'isEmail']}
                             errorMessages={[
                               'this field is required',
                               'email is not valid']}/>
              <TextField fullWidth required name="full_name" id="full_name"
                         label="Full name"
                         value={this.state.user.full_name}
                         onChange={this.handleInputChange}/>
              <Button id="button" variant="contained"
                      type="submit">Register<Send style={{paddingLeft: 6}}/></Button>
              <Button id="button2" variant="contained"
                      onClick={this.toggleForm}>Already got an<br/>account? Log in!
              </Button>
              <p className={classes.alert}>
                {this.state.message}
              </p>
            </ValidatorForm>
          </React.Fragment>
          }
        </div>
    );
  }
}

Login.propTypes = {
  setUser: PropTypes.func,
  history: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(Login);
