import React, { Component } from "react";
import { Link } from "react-router";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/api">Search</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
