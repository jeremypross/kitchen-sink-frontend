import React, { Component } from "react";
import update from "react-addons-update";

import Nav from "../Nav/Nav";

class RecipeResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      search: {
        query: ""
      }
    };
  }

  handleChange(event) {
    let newState = update(this.state, {
      search: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState)
    console.log(this.state);
  }

  findRecipes() {
    fetch(`http://localhost:8000/api/${this.state.search.query}`, {
      method: "GET",
      datatype: "json",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((results) => {
      console.log('results of fetch GET in RecipeResult.js', results);
      results.json().then((data) => {
        this.setState({ recipes: data.matches });
        console.log("data from RecipeResult promise", data);
        console.log("this.state.recipes:", this.state.recipes);
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
  }

  render() {
    return(
      <div>
        <h1>Kitchen Sink</h1>
        <Nav />
        <h3>Enter Ingredients:</h3>
        <input name="query" onChange={this.handleChange.bind(this)} value={this.state.search.query} placeholder="Enter ingredients"></input><br />
        <button onClick={this.findRecipes.bind(this)}>Search for Recipes</button>
        <h3>Recipes:</h3>

        {/* iterate over recipe results here */}

        {this.state.recipes.map((recipe) => {
          return(
            <div key={recipe.id}>
              <h3>{recipe.recipeName}</h3>
              <img src={recipe.imageUrlsBySize[90]} />
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Source: {recipe.sourceDisplayName}</p>
            </div>

          )

        })}


      </div>
    );
  }

}

export default RecipeResult;
