import React, { Component } from "react";

class AddVideoForm extends Component {
  state = {
    file: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.file) {
      return;
    }

    this.props.onVideoUpload(this.state.file);
    this.setState({
      file: null,
    });
    this.props.onClose();
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      file: e.target.files[0],
    });
  };

  render() {
    return (
      <form id="add-video-form" onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <input
            type="file"
            name="new_video"
            id="new_video"
            onChange={this.handleChange}
          />
        </fieldset>
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.props.onClose}
          >
            Close
          </button>
          <button type="submit" className="btn btn-success">
            Upload
          </button>
        </div>
      </form>
    );
  }
}

export default AddVideoForm;
