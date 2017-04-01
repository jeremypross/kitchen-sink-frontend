import React, { Component } from "react";
import { browserHistory } from "react-router";
import update from "react-addons-update";
import Nav from "../Nav/Nav";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state={
      user: {
        email: "",
        password: ""
      }
    };
  }

  handleChange(event) {
    let newState = update(this.state, {
      user: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
  }

  // POST request
  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then((results) => {
      results.json().then((jwt) => {
        console.log("jwt in login component", jwt.token);
        window.localStorage.setItem("MyToken", jwt.token);
        // window.localStorage.setItem("user_id", )
        // push to user's dashboard
        browserHistory.push("/dashboard");
      });
    })
    .catch(() => {
      alert("Not Authenticated!");
    });
  }

  render() {
    return (
     <div id="login-form">
        <div className="container">
          <h1>Kitchen Sink</h1>
          <Nav />
          <h3>Login</h3>
          <div className="form-container">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input name="email" type="email" placeholder="email" onChange={this.handleChange.bind(this)} />
              <br/>
              <input name="password" type="password" placeholder="password" onChange={this.handleChange.bind(this)} />
              <br/>
              <button className="standard-btn" type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
