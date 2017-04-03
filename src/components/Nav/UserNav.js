import React, { Component } from "react";
import { Link } from "react-router";

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    window.localStorage.removeItem("MyToken");
    window.localStorage.removeItem("user_id");
  }

  render() {
    return (
      <div>
        <ul id="nav-bar">
          <li>
            <Link to="/api">Search</Link>
          </li>
          <li>
            <Link to="/login" onClick={this.handleSubmit.bind(this)}>Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserNav;
