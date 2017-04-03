import React, { Component } from "react";
import { browserHistory } from "react-router";
import update from "react-addons-update";
import { Link } from "react-router";

class SavedRecipe extends Component {
  constructor() {
    super();

    this.state = {
      comment: "",
      isVisible: {
        display: "block"
      }
    }
  }

  handleChange(event) {
    let newState = update(this.state, {
      $merge: {
        [event.target.name]: event.target.value
      }

    });

    this.setState(newState);
  }

  // PUT request for adding comments to saved recipes
  addComment(event) {
    event.preventDefault();

    const user_id = window.localStorage.getItem('user_id');
    fetch(`http://localhost:8000/recipes/${this.props.id}/${user_id}`, {
      method: "PUT",
      body: JSON.stringify({comment: this.state.comment}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
        console.log("COMMENT ADDED");
        console.log("Comment:", this.state.comment)
        this.setState({ comment: this.state.comment });
        this.setState({ comment: "" })

        browserHistory.push("/dashboard")
    })
    .catch((err) => {
      console.log("ERROR", err);
    })
  }

  // DELETE request to delete saved recipe
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
      <div style={this.state.isVisible}>
        <div className="dashboard-container">
          <div className="dashboard-item">
            <div className="dashboard-image">
              <h3 className="saved-item-title">{this.props.title}</h3>
              <img src={this.props.image} />
            </div>
          </div>
          <div className="dashboard-item">
            <p>Cooking Time: {this.props.cook_time}</p>
            <p>Ingredients: {this.props.ingredients}</p>
            <p>Source: <a href={this.props.source_url}>{this.props.source}</a></p>
            <Link to="/dashboard">
              <button onClick={this.handleDelete.bind(this)}>Remove Recipe</button>
            </Link>
          </div>
        </div>
        <h4>Comment:</h4>
        <p>{this.props.comment}</p>
          <br />
        <input name="comment" type="text" placeholder="Enter Comment..." onChange={this.handleChange.bind(this)} />
          <br />
          <br />
        <button onClick={this.addComment.bind(this)}>Submit Comment</button>
      </div>
    );
  }
}

export default SavedRecipe;
