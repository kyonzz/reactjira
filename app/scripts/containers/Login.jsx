import React from 'react';
import { ActionTypes } from '../constants/index';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = e => {
    localStorage.setItem('isLoggedIn', true);
    this.props.dispatch({ type: ActionTypes.USER_LOGIN_SUCCESS });
  }
  render() {
    return (
      <div className="wrapper">
        <form  className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control" placeholder="Email Address" autoFocus="" />
          <input type="password" className="form-control" placeholder="Password" />
          <button onClick={this.onSubmit} className="btn btn-lg btn-primary btn-block">Login</button>
        </form>
      </div>
    );
  }
};

export default connect()(Login);
