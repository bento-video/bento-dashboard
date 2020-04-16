import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const DeleteVideoForm = ({
  videoId,
  deleteType,
  onClose,
  onDeleteVersion,
  onDeleteVideo,
}) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Planning to delete ${deleteType} ${videoId}`);
    if (deleteType === "version") {
      onDeleteVersion(videoId);
      onClose();
    } else {
      onDeleteVideo(videoId);
      history.push("/");
    }
  };

  return (
    <div>
      <ul>
        <li>
          This will delete
          <strong>
            {deleteType === "video" ? " all versions " : " only this version "}
          </strong>
          of this video.
        </li>
        <li>
          <span className="alert">This cannot be undone.</span>
        </li>
      </ul>
      <form id="delete-form" onSubmit={handleSubmit}>
        <div className="row">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteVideoForm;
