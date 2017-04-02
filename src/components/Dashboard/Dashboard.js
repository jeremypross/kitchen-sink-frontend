import React, { Component } from "react";
import { browserHistory } from "react-router";
import update from "react-addons-update";
import Nav from "../Nav/Nav";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state ={

    }
  }

  render() {
    return(
      <div id="dashboard">
        <h1>Kitchen Sink</h1>
        <h3>Dashboard</h3>
        <Nav />
      </div>
    )
  }
}

export default Dashboard;
