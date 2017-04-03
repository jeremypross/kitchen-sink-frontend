import React, { Component } from "react";
import { Link } from "react-router";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loggedIn: {
      //   display: 'none'
      // },
      // loggedOut: {
      //   display: 'inline-block'
      // }
    };
  }

  // componentDidMount() {
  //   if(window.localStorage.getItem('loggedin')) {
  //     this.setState({loggedOut: {display: 'none'}});
  //     this.setState({loggedIn: {display: 'inline-block'}});
  //   } else {
  //     this.setState({loggedIn: {display: 'none'}});
  //     this.setState({loggedOut:{display: 'inline-block'}});
  //   }
  // }

  render() {
    return (
      <div>
        <ul id="nav-bar">
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
