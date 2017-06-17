import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
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
    console.log(localStorage.isLoggedIn)
    this.props.dispatch({ type: ActionTypes.USER_LOGOUT_SUCCESS });
  };
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/dashboard" onClick={this.onClickLogo}>REACT JIRA</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/*<Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>*/}
          <Nav pullRight>
            <NavItem>
              {this.props.isLoggedIn
                ? <p>
                    Hello user,
                    {' '}
                    <Link onClick={this.logout} to="/login">
                      click hear to logout
                    </Link>
                  </p>
                : <Link to="/login">Log in</Link>}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
