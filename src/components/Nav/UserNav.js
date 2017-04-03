import React, { Component } from "react";
import { browserHistory } from "react-router";
import { Link } from "react-router";

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    window.localStorage.removeItem("MyToken");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("loggedin")
    browserHistory.push('/login');
  }

  render() {
    return (
      <div>
        <ul id="nav-bar">
          <li>
            <Link to="/api">Search</Link>
          </li>
          <li>
            <Link to="/" onClick={this.handleSubmit.bind(this)}>Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserNav;
