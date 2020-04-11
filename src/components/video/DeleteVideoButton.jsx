import React from 'react';

const DeleteVideoButton = (props) => {
  return (
    <button
      id="delete-original"
      type="button"
      class="btn btn-danger"
      data-toggle="modal"
      data-target={`#delete-${props.deleteType}-confirm-modal`}>
      Delete
    </button>
  );
}

export default DeleteVideoButton;