import React, { Component } from "react";
import { selectIssue } from "../actions";

class Test extends Component {
  constructor(props) {
    super(props);
  }
  buttonLogger = () => {
    console.log("wtf" + this.props.route);
  };
  render() {
    return (
      <div>
        <p>{this.props.params.id}</p>
        <button onClick={this.buttonLogger}>Click me please</button>
      </div>
    );
  }
}

export default Test;
