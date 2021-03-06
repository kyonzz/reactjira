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
      <div>
        <form>
          <div className="form-group">
            <label>{options.email.label}</label>
            <input
              type="email"
              onChange={this.onChange}
              className="form-control"
              placeholder={options.email.placeholder}
            />
          </div>
          <div className="form-group">
            <label>{options.password.label}</label>
            <input
              type="password"
              onChange={this.onChange}
              className="form-control"
              placeholder={options.password.placeholder}
            />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" onChange={this.onChange} />
              {' '}
              {options.checkbox.text}
            </label>
          </div>
          <button
            type="submit"
            onClick={this.onSubmit}
            className="btn btn-default"
          >
            {options.submitButton.text}
          </button>
        </form>
      </div>
    );
  }
});

export default connect()(Login);
