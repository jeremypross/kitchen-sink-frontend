import React, { Component } from "react";
import { browserHistory } from "react-router";
import update from "react-addons-update";
import { Link } from "react-router";

class SavedRecipe extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: {
        display: "block"
      },
      comment: ""
    };
  }

  // handleChange(event) {
  //   let newState = update(this.state, {
  //     comment: {
  //       $merge: {
  //         [event.target.name]: event.target.value
  //       }
  //     }
  //   });
  //
  //   this.setState(newState);
  // }
  //
  // addComment(event) {
  //   event.preventDefault();
  //
  //   fetch(`http://localhost:8000/recipes/${this.props.id}/${this.props.user_id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({comment: this.state.comment}),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(() => {
  //       console.log("COMMENT ADDED");
  //       this.setState({ comment: data });
  //       browserHistory.push("/dashboard")
  //   })
  //   .catch((err) => {
  //     console.log("ERROR", err);
  //   })
  // }

  handleDelete() {
    fetch(`http://localhost:8000/recipes/${this.props.id}/${this.props.user_id}`, {
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
      <div className="dashboard-recipe" style={this.state.isVisible}>
        <div>
          <h3>{this.props.title}</h3>
        </div>
        <img src={this.props.image} />
        <p>Cooking Time: {this.props.cook_time}</p>
        <p>Ingredients: {this.props.ingredients}</p>
        <p>Source: <a href={this.props.source_url}>{this.props.source}</a></p>
        <p></p>
        <Link to="/dashboard">
          <button onClick={this.handleDelete.bind(this)}>Remove Recipe</button>
        </Link>

        {/* <h4>Submit Comment:</h4>
        <input name="comment" type="text" placeholder="Comment..." onChange={this.handleChange.bind(this)} />
        <br />
        <br />
        <button onSubmit={this.addComment.bind(this)}>Submit Comment</button> */}

      </div>

    );
  }
}

export default SavedRecipe;
