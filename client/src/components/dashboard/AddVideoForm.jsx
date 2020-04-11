import React, { Component } from "react";

class AddVideoForm extends Component {
  state = {};
  render() {
    return (
      <form action="#" method="post">
        <fieldset className="form-group">
          <input type="file" name="new_video" id="new_video" />
        </fieldset>
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
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
