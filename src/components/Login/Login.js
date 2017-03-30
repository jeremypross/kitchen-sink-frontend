import React, { Component } from "react";
import { browserHistory } from "react-router";
import update from "react-addons-update";

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
        console.log('jwt in login component', jwt.token);
        window.localStorage.setItem("MyToken", jwt.token);
        // push to dashboard here once recipe model/controller are built out
        browserHistory.push("/");
      });
    })
    .catch(() => {
      alert("Not Authenticated!");
    });
  }

  render() {
    return (
     <div>
        <div className="container">
          <h2>Login Here</h2>
          <div className="form-container">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <h4>Email:</h4>
              <input name="email" type="email" onChange={this.handleChange.bind(this)} />
              <h4>Password:</h4>
              <input name="password" type="password" onChange={this.handleChange.bind(this)} /><br/>
              <button className="standard-btn" type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
