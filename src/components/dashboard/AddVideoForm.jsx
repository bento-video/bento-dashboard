import React, { Component } from "react";
import { validateFileInput } from "../../helpers";

class AddVideoForm extends Component {
  state = {
    file: null,
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { error, msg } = validateFileInput(this.state.file);
    if (error) {
      this.setState({ error: msg });
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
      error: null,
    });
  };

  render() {
    return (
      <form id="add-video-form" onSubmit={this.handleSubmit}>
        <p className="text-danger">{this.state.error}</p>
        <fieldset className="form-group">
          <input
            type="file"
            name="new_video"
            id="new_video"
            onChange={this.handleChange}
            accept="video/mp4,video/quicktime,video/*,.ts,video/3gpp,video/*,.mkv"
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
