import React from "react";

const DeleteVideoButton = ({ onClick, videoId, deleteType }) => {
  return (
    <button
      id="delete-original"
      type="button"
      className="btn btn-danger"
      onClick={() => onClick(videoId, deleteType)}
    >
      Delete
    </button>
  );
};

export default DeleteVideoButton;
