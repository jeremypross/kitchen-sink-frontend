import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    // console.log("PROPS*****", props)

    this.state = {
      modalVisible: false
    }
  }

  render() {
    return(
          <div id="modal">
            <div className="modal-body">
              <h3 className="modal-content">{this.props.name}</h3>
              <img className="modal-content" src={this.props.image} />
              <p className="modal-content">Servings: {this.props.servings}</p>
              <p className="modal-content">Total Time: {this.props.time}</p>
              <p className="modal-content">Ingredients: {this.props.ingredients.join(', ')}</p>
              <p className="modal-content">Rating: {this.props.rating} / 5</p>
              <p className="modal-content">Recipe Source: <a href={this.props.source_url} target="_blank">{this.props.source}</a></p>
              <button onClick={this.props.hideModal}>Close</button>
              <button onClick={this.props.handleSubmit}>Save Recipe</button>
            </div>
          </div>
        )
    }
}


export default Modal;
