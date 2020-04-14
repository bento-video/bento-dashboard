import React from "react";

const DeleteVideoButton = (props) => {
  return (
    <button
      id="delete-original"
      type="button"
      class="btn btn-danger"
      onClick={props.onClick}
    >
      Delete
    </button>
  );
};

export default DeleteVideoButton;
