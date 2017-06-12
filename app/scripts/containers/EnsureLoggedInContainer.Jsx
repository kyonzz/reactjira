import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { setRedirectUrl } from '../actions';

class EnsureLoggedInContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch, location } = this.props;

    if (localStorage.isLoggedIn == false) {
      dispatch(setRedirectUrl(location.pathname));
      dispatch(push('/login'));
    }
  }

  render() {
    return localStorage.isLoggedIn == true ? this.props.children : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};
export default connect(mapStateToProps)(EnsureLoggedInContainer);
