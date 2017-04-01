import React, { Component } from "react";
import Nav from "../Nav/Nav";


class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="homepage">
        <h1>Kitchen Sink</h1>
        <Nav />
        <p>Need recipe inspiration?</p>
      </div>
    );
  }
}

export default Homepage;
