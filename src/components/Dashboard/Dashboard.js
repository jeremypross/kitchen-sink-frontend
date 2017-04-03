import React, { Component } from "react";
import { browserHistory } from "react-router";
import update from "react-addons-update";

import UserNav from "../Nav/UserNav";
import SavedRecipe from "../Dashboard/SavedRecipe";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      user_id: 0,
      comment: ""
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
        console.log("THIS.STATE.RECIPES", this.state.recipes);
      });
    })
    .catch((err) => {
      console.log("ERROR:", err);
      browserHistory.push('/login');
    })
  }

  handleChange(event) {
    let newState = update(this.state, {
      comment: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
  }

  // addComment(event) {
  //   event.preventDefault();
  //
  //   const user_id = window.localStorage.getItem('user_id');
  //
  //   fetch(`http://localhost:8000/recipes/6/${user_id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ comment: this.state.comment}),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(() => {
  //       console.log("COMMENT ADDED");
  //       // this.setState({ comment: data });
  //       browserHistory.push("/dashboard")
  //   })
  //   .catch((err) => {
  //     console.log("ERROR", err);
  //   })
  // }

  // need to work on these route parameters
  // having parsing errors in promise

  render() {
    return(
      <div id="dashboard">
        <h1>Kitchen Sink</h1>
        <h3>Dashboard</h3>

        <UserNav />
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

              {/* <form onSubmit={this.addComment.bind(this)}>
                <h4>Submit Comment:</h4>
                <input name="comment" type="text" placeholder="Comment..." />
                <br />
                <br />
                <button type="submit">Submit</button>
              </form> */}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Dashboard;
