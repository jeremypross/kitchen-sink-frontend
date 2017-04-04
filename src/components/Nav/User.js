import React, { Component } from "react";
import { Link } from "react-router";

class User extends Component {
  constructor(props) {
    super(props);
  }

  const user_id = window.localStorage.getItem("user_id");
  // console.log("USER ID:", user_id);

  // component did mount - get request to users with id as parameter
  componentDidMount() {
    if(window.localStorage.getItem('loggedIn')) {
      this.setState({ loggedIn: {display:'inline-block'}});
    } else {
      this.setState({ loggedIn: {display:'none'}});
    }


  }

  // style={this.state.loggedIn}

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
