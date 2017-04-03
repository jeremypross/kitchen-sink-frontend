import React, { Component } from "react";
import update from "react-addons-update";

import Nav from "../Nav/Nav";
import Modal from "../Modal/Modal";

class RecipeResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      search: {
        query: ""
      },
      recipe: {},
      modalVisible: false
    };

  }

  showModal() {
    this.setState({ modalVisible: true });
    console.log("showModal() this", this);
  }

  hideModal() {
    this.setState({ modalVisible: false });
    console.log("hideModal() this", this);
  }

  // callback to set state of modal as visible - that passes down to modal as a prop
  // pass it down like: showModal={this.showModal.bind(this)}

  handleChange(event) {
    let newState = update(this.state, {
      search: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
    // console.log(this.state);
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
        this.setState({ recipe: data });
        console.log("this.state.recipe", this.state.recipe);
        // this.setState({ modalVisible: true });
        this.showModal()
      });
    });
  }

  // POST to saved recipes on user's dashboard
  handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:8000/recipes`, {
      method: "POST",
      body: JSON.stringify({
        recipe: {
          title: `${this.state.recipe.name}`,
          ingredients: `${this.state.recipe.ingredientLines}`,
          image_url: `${this.state.recipe.images[0].hostedLargeUrl}`,
          cook_time: `${this.state.recipe.totalTime}`,
          source: `${this.state.recipe.source.sourceDisplayName}`,
          source_url: `${this.state.recipe.source.sourceRecipeUrl}`,
          user_id: window.localStorage.getItem('user_id')
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      // push to dashboard
      this.props.router.push('/dashboard');
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
  }

  render() {
    return(
      <div id="results-page">
        <h1>KITCHEN SINK</h1>
        <Nav />

        {/* search input for API query parameters */}
        <div id="search-bar">
          <h3>Recipe Inspiration!</h3>
          <input name="query" className="form-input" onChange={this.handleChange.bind(this)} value={this.state.search.query} placeholder="Enter ingredients" />
          <br />
          <br />
          <button onClick={this.findRecipes.bind(this)}>Search for Recipes!</button>
        </div>

        {/* iterate over recipes array and render search results */}
        {this.state.recipes.map((recipe) => {
          return(
            <div key={recipe.id}>
              <div className="result-container">
                <div className="result-item">
                  <h3>{recipe.recipeName}</h3>
                  <img src={recipe.imageUrlsBySize[90]} />
                  <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                  <p>Source: {recipe.sourceDisplayName}</p>

                  {/* button to modal / GET recipe id fetch call here */}
                  <button onClick={this.findRecipeInfo.bind(this, recipe)}>More Info</button>
                  {/* <button onClick={this.hideModal.bind(this)}>Close Modal</button> */}
                </div>
              </div>
            </div>
          );
        })}

        {this.state.modalVisible ?
          <Modal
            name={this.state.recipe.name}
            image={this.state.recipe.images[0].hostedLargeUrl}
            ingredients={this.state.recipe.ingredientLines}
            rating={this.state.recipe.rating}
            servings={this.state.recipe.numberOfServings}
            source={this.state.recipe.source.sourceDisplayName}
            source_url={this.state.recipe.source.sourceRecipeUrl}
            time={this.state.recipe.totalTime}


          /> : null}

          {this.state.modalVisible?
            <button onClick={this.hideModal.bind(this)}>Close</button>
            : null
          }
          <br/>
          <br/>
          {this.state.modalVisible?
            <button onClick={this.handleSubmit.bind(this)}>Save Recipe</button>
            : null
          }

      </div>
    );
  }

}

export default RecipeResult;
