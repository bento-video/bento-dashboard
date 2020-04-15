import React from "react";
import DeleteVideoButton from "./DeleteVideoButton";
import DownloadVideoButton from "./DownloadVideoButton";
import { formatResolution } from "../../helpers";

const VersionItem = ({
  title,
  resolution,
  versionId,
  onShowModal,
  versionUrl,
}) => {
  return (
    <li class="video-version item list-group-item">
      <div class="details col-4">
        <h5>{title}</h5>
        <div class="resolution tag">{formatResolution(resolution)}</div>
      </div>
      <div class="actions col-4">
        <DownloadVideoButton versionUrl={versionUrl} />
        <DeleteVideoButton
          deleteType={"version"}
          videoId={versionId}
          onClick={onShowModal}
        />
      </div>
    </li>
  );
};

export default VersionItem;
