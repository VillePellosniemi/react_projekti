import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component {

  render() {
    return (
        <h1>Login</h1>
    );
  }
}

Login.propTypes = {
  match: PropTypes.object,
};

export default Login;
