import React from 'react';
import { ActionTypes } from '../constants/index';
import { connect } from 'react-redux';
const Login = React.createClass({
  propTypes: {
    options: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func
  },
  onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target, e.target.value, e);
    }
  },
  onSubmit(e) {
    localStorage.setItem('isLoggedIn', true);
    this.props.dispatch({ type: ActionTypes.USER_LOGIN_SUCCESS });
  },
  render() {
    let options = {
      email: {
        label: 'Email ddress',
        placeholder: 'Email'
      },
      password: {
        label: 'Password',
        placeholder: 'Password'
      },
      checkbox: {
        text: 'Check me out'
      },
      submitButton: {
        text: 'Submit'
      }
    };
    options = Object.assign(options, this.props.options || {});
    return (
      <div className="wrapper">
        <form onSubmit={this.onSubmit} className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" />
          <input type="password" className="form-control" name="password" placeholder="Password" required="" />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    );
  }
});

export default connect()(Login);
