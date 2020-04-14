import React from "react";
import DeleteVideoButton from "./DeleteVideoButton";
import DownloadVideoButton from "./DownloadVideoButton";

const VersionItem = ({ title, resolution, videoId, onShowModal }) => {
  return (
    <li class="video-version item list-group-item">
      <div class="details col-4">
        <h5>{title}</h5>
        <div class="resolution tag">{resolution}</div>
      </div>
      <div class="actions col-4">
        <DownloadVideoButton />
        <DeleteVideoButton
          deleteType={"version"}
          videoId={videoId}
          onClick={onShowModal}
        />
      </div>
    </li>
  );
};

export default VersionItem;
