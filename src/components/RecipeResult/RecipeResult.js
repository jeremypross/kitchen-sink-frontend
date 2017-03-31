import React, { Component } from "react";
import update from "react-addons-update";

import Nav from "../Nav/Nav";

class RecipeResult extends Component {
  constructor(props) {
    super(props);

    // store empty recipes array and empty query string in state
    this.state = {
      recipes: [],
      search: {
        query: ""
      },
      recipe: {}
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

    this.setState(newState);
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
        // console.log("recipe id:", this.state.recipes[0].id)
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
  }

  // SECOND API CALL - using recipe id as parameter
  findRecipeInfo(recipe) {
    console.log(recipe.id);

    fetch(`http://localhost:8000/api/info/${recipe.id}`, {
      method: "GET",
      datatype: "json",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((results) => {
      results.json().then((data) => {
        this.setState({ recipe: data })
        console.log("data", this.state.recipe);
      });
    })

  }

  render() {
    return(
      <div>
        <h1>Kitchen Sink</h1>
        <Nav />

        {/* search input for API query parameters */}
        <h3>Enter Ingredients:</h3>
        <input name="query" onChange={this.handleChange.bind(this)} value={this.state.search.query} placeholder="Enter ingredients" /><br />
        <button onClick={this.findRecipes.bind(this)}>Search for Recipes</button>
        <h3>Recipes:</h3>

        {/* iterate over recipes array and render search results */}
        {this.state.recipes.map((recipe) => {
          return(
            <div key={recipe.id}>
              <h3>{recipe.recipeName}</h3>
              <img src={recipe.imageUrlsBySize[90]} />
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Source: {recipe.sourceDisplayName}</p>
              <p>ID: {recipe.id}</p>

              {/* button to modal / GET recipe id fetch call here */}
              <button onClick={this.findRecipeInfo.bind(this, recipe)}>More Info</button>
            </div>
          );
        })}

      </div>
    );
  }

}

export default RecipeResult;
