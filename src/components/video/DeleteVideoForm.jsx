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
            This will delete{" "}
            <strong>
              {this.props.deleteType === "video"
                ? "all versions"
                : "only this version"}
            </strong>{" "}
            of this video.
          </li>
          <li>
            <span class="alert">This cannot be undone.</span>
          </li>
        </ul>
        <form id="delete-form" onSubmit={this.handleSubmit}>
          <div class="row">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={this.props.onClose}
            >
              Close
            </button>
            <button type="submit" class="btn btn-danger">
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DeleteVideoForm;
