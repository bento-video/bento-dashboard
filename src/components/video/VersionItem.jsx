import React from 'react';

const VersionItem = ({ title, resolution }) => {
  return (
    <li class="video-version item list-group-item">
      <div class="details col-4">
        <h5>{title}</h5>
        <div class="resolution tag">{resolution}</div>
      </div>
      <div class="actions col-4">
        <button type="button" class="btn btn-success">
          Download
        </button>
        <button
          type="button"
          class="btn btn-danger"
          data-toggle="modal"
          data-target="#delete-confirm-modal">
          Delete
        </button>
      </div>
    </li>
  );
}

export default VersionItem;