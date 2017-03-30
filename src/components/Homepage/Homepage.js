import React, { Component } from "react";
import Nav from "../Nav/Nav";


class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Kitchen Sink</h1>
        <Nav />
        <p>Homepage content</p>
      </div>
    );
  }
}

export default Homepage;
