import React, { Component } from "react";

import Nav from "../Nav/Nav";

class RecipeResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api`, {
      method: "GET"
    })
    .then((results) => {
      console.log('results of fetch GET in RecipeResult.js', results);
      results.json().then((data) => {
        this.setState({ recipes: data })
        console.log("data in RecipeResult promise", data)
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
  };

  render() {
    return(
      <div>
        <h1>Kitchen Sink</h1>
        <Nav />
        <h3>Recipe Result</h3>
        <input name="query" placeholder="Enter ingredients"></input><br />
        <input type="submit"></input>


      </div>
    )
  }

}

export default RecipeResult;
