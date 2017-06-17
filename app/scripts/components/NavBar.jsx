import React, { Component } from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { requestIssues } from '../actions';
import { ActionTypes } from '../constants/index';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  onClickLogo = e => {
    e.preventDefault();
    if (this.props.isLoggedIn) {
      window.location.reload();
    } else {
      this.props.dispatch(push(e.currentTarget.getAttribute('href')));
    }
  };
  logout = e => {
    localStorage.setItem('isLoggedIn', false);
    this.props.dispatch({ type: ActionTypes.USER_LOGOUT_SUCCESS });
  };
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">REACT JIRA</a>
          </div>
          {this.props.isLoggedIn ?
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
            :
            <ul className="nav navbar-nav navbar-right">
              <li><Link onClick={this.logout} to="/login"><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
            </ul>
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username
  };
};

export default connect(mapStateToProps)(NavBar);