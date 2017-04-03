import React, { Component } from "react";
import Nav from "../Nav/Nav";


class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }
  }

  // GET request for recipes data
  componentDidMount() {
    fetch(`http://localhost:8000/recipes`, {
      method: "GET"
    })
    .then((results) => {
      results.json().then((data) => {
        this.setState({ recipes: data });
        console.log("signup.js componentDidMount data:", data);
      });
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
  }

  render() {
    return (
      <div id="homepage">
        <h1>KITCHEN SINK</h1>
        <Nav />
        <h5>Recently Recipes Saved By Users:</h5>
        {this.state.recipes.map((recipe) => {
          return(
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image_url}/>
              <p>Recipe: <a href={recipe.source_url}>{recipe.source}</a></p>
            </div>
          )

        })}

      </div>
    );
  }
}

export default Homepage;
