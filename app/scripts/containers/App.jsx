import React from "react";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import { push } from "react-router-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps) {
    const { dispatch, redirectUrl } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      dispatch(push(redirectUrl));
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
    redirectUrl: state.app.redirectUrl
  };
}
export default connect(mapStateToProps)(App);
