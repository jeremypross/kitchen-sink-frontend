import React, { Component } from "react";
import { Link } from "react-router";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <p>User: {this.state.recipes[0].first_name} {this.state.recipes[0].last_name}</p>
          <p>{this.state.recipes[0].email}</p>
        </div>
      </div>
    );
  }
}

export default User;
