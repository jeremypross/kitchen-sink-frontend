import React, { Component } from "react";
import { Link } from "react-router";
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
        <p>search functionality here</p>
      </div>
    );
  }
}

export default Homepage;
