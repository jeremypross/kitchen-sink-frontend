import React, { Component } from "react";
import { Link } from "react-router";

class SavedRecipe extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: {
        display: "block"
      }
    };
  }

  handleDelete() {
    fetch(`http://localhost:8000/recipes/${this.props.recipe_id}/${this.props.user_id}`, {
      method: "DELETE"
    })
    .then(() => {
      this.setState({isVisible: {display: "none"}});
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });
  }

  render() {
    return(
      <div>
        <div>
          <h3>{this.props.title}</h3>
        </div>
        <img src={this.props.image} />
        <p>Cooking Time: {this.props.cook_time}</p>
        <p>Ingredients: {this.props.ingredients}</p>
        <p><a href={this.props.source_url}>Recipe Source</a></p>
        <p></p>
        <Link to="/dashboard">
          <button onClick={this.handleDelete.bind(this)}>Remove from Favorites</button>
        </Link>
      </div>
    );
  }
}

export default SavedRecipe;
