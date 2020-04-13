import React, { Component } from "react";
import AddVideoButton from "./AddVideoButton";
import AddVideoModal from "./AddVideoModal";

class AddVideo extends Component {
  state = {
    showModal: false,
  };

  handleShow = () => this.setState({ showModal: true });
  handleClose = () => this.setState({ showModal: false });

  render() {
    return (
      <div>
        <AddVideoButton onClick={this.handleShow} />
        <AddVideoModal
          show={this.state.showModal}
          onVideoUpload={this.props.onVideoUpload}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default AddVideo;
