import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    console.log("props", this.props);

    this.state = {
      modalVisible: false
    }
  }

  hideModal() {
    this.setState({ modalVisible: false })
  }

  render() {
    return(
          <div>
              <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="myModalLabel">Recipe Info:</h4>
                    </div>
                    <div className="modal-body">
                      Recipe Content Here
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" onClick={this.props.hideModal}>Close</button>
                      <button type="button" className="btn btn-primary">Save To User Profile</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )
    }
}


export default Modal;
