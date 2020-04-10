import React from 'react';

const DeleteVideoButton = () => {
  return (
    <button
      id="delete-original"
      type="button"
      class="btn btn-danger"
      data-toggle="modal"
      data-target="#delete-confirm-modal">
      Delete
    </button>
  );
}

export default DeleteVideoButton;