import React, { Component } from "react";

class DeleteVideoForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Planning to delete  ${this.props.deleteType} ${this.props.videoId}`
    );
    this.props.onClose();
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            This will delete
            <strong>
              {this.props.deleteType === "video"
                ? " all versions "
                : " only this version "}
            </strong>
            of this video.
          </li>
          <li>
            <span className="alert">This cannot be undone.</span>
          </li>
        </ul>
        <form id="delete-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.onClose}
            >
              Close
            </button>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DeleteVideoForm;
