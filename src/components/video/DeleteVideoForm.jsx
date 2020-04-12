import React, { Component } from 'react';

class DeleteVideoForm extends Component {
  state = {}
  render() {
    return (
      <div>
        <ul>
          <li>
            This will delete <strong>{this.props.deleteType === "video" ? "all versions" : "only this version"}</strong> of this
            video.
          </li>
          <li><span class='alert'>This cannot be undone.</span></li>
        </ul>
        < form action="#" method="post" > {/* // action will have version id, obtained from this.props */}
          <div class="row">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal">
              Close
          </button>
            <button type="submit" class="btn btn-danger">
              Delete
          </button>
          </div>
        </form >
      </div>
    );
  };
};

export default DeleteVideoForm;
