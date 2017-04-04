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
    fetch(`https://kitchen-sink-app.heroku.com/recipes`, {
      method: "GET"
    })
    .then((results) => {
      results.json().then((data) => {
        this.setState({ recipes: data });
        // console.log("homepage componentDidMount data:", data);
      });
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
  }

  render() {
    return (
      <div id="homepage">
        <Nav />
        <h3>RECENTLY SAVED RECIPES:</h3>
        <div className="result-container">
          {this.state.recipes.map((recipe) => {
            return(
              <div key={recipe.id} className="homepage-item">
                <h3 className="homepage-content">{recipe.title}</h3>
                <img src={recipe.image_url}/>
                <p className="homepage-content">Recipe: <a href={recipe.source_url}>{recipe.source}</a></p>
              </div>
            )
          })}
        </div>

      </div>
    );
  }
}

export default Homepage;
