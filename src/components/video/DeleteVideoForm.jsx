import React, { Component } from 'react';

class DeleteVideoForm extends Component {
  state = {}
  render() {
    return (
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
    );
  };
};

export default DeleteVideoForm;