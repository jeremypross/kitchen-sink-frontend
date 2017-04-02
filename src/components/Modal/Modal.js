import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS*****", props)


    this.state = {
      modalVisible: false
    }

  }

  // showModal() {
  //   this.setState({ modalVisible: true })
  // }
  //
  // hideModal() {
  //   this.setState({ modalVisible: false })
  //   console.log(this.state);
  // }

  render() {
    return(
          <div id="modal">
            <div>
              <h4 className="modal-title">Recipe Info:</h4>
            </div>
            <div className="modal-body">
              <h3>{this.props.name}</h3>
              <img src={this.props.image} />
              <p>Servings: {this.props.servings}</p>
              <p>Total Time: {this.props.time}</p>
              <p>Ingredients: {this.props.ingredients.join(', ')}</p>
              <p>Rating: {this.props.rating} / 5</p>
              <p>Recipe Source: <a href={this.props.source_url}>{this.props.source}</a></p>
            </div>
          </div>
        )
    }
}


export default Modal;
