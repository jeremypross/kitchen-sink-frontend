import React, { Component } from "react";
import { browserHistory } from "react-router";

import Nav from "../Nav/Nav";
import SavedRecipe from "../Dashboard/SavedRecipe";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      user_id: 0
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/users/dashboard', {
      method: "GET",
      headers: {
        "Authorization": window.localStorage.getItem("MyToken")
      }
    })
    .then((results) => {
      results.json().then((data) => {
        console.log("DATA:", data);
        console.log("USER ID:", data.user_id)
        this.setState({ recipes: data.data });
        this.setState({ user_id: data.user_id });
        window.localStorage.setItem('user_id', this.state.user_id);
    });
  })
  .catch((err) => {
    console.log("ERROR:", err);
    browserHistory.push('/login');
  })
}

  render() {
    return(
      <div id="dashboard">
        <h1>Kitchen Sink</h1>
        <h3>Dashboard</h3>
        <Nav />
        {this.state.recipes.map((recipe) => {
          return(
            <div key={recipe.id}>
              <SavedRecipe
                title={recipe.title}
                ingredients={recipe.ingredients}
                image={recipe.image_url}
                source={recipe.source}
                source_url={recipe.source_url}
                cook_time={recipe.cook_time}
                id={recipe.id}
                user_id={recipe.user_id}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Dashboard;
