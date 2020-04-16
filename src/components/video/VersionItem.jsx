import React from "react";
import DeleteVideoButton from "./DeleteVideoButton";
import DownloadVideoButton from "./DownloadVideoButton";
import { formatResolution } from "../../helpers";

const VersionItem = ({
  filename,
  resolution,
  versionId,
  onShowModal,
  versionUrl,
  status,
  onDelete,
}) => {
  return (
    <li className="video-version item list-group-item">
      <div className="details col-8">
        <h5>{filename}</h5>
        <div className="resolution tag">{formatResolution(resolution)}</div>
      </div>
      {status === "pending" ? (
        <div className="actions col-4">
          <button type="button" class="btn btn-warning" disabled={true}>
            Pending
          </button>
        </div>
      ) : (
        <div className="actions col-4">
          <DownloadVideoButton versionUrl={versionUrl} />
          <DeleteVideoButton
            deleteType={"version"}
            videoId={versionId}
            onClick={onShowModal}
          />
        </div>
      )}
    </li>
  );
};

export default VersionItem;
