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
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      dispatch(setRedirectUrl(location.pathname));
      dispatch(push('/login'));
    }
  }
  render() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn)
    return isLoggedIn ? this.props.children : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};
export default connect(mapStateToProps)(EnsureLoggedInContainer);
