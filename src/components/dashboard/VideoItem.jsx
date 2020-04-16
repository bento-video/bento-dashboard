import React from "react";
import { Link } from "react-router-dom";
import { formatBytes } from "../../helpers";

const VideoItem = (props) => {
  return props.uploading ? (
    <div className="video list-group-item list-group-item-action">
      <h4>{props.filename}</h4>
      <p className="video-versions">Resolution: {props.resolution}</p>
      <p className="video-versions">Size: {formatBytes(props.size)}</p>
      <p className="video-versions">Versions: {props.versions}</p>
    </div>
  ) : (
    <Link
      to={`/videos/${props.videoId}`}
      className="list-group-item list-group-item-action"
    >
      <div className="video">
        <h4>{props.filename}</h4>
        <p className="video-versions">Resolution: {props.resolution}</p>
        <p className="video-versions">Size: {formatBytes(props.size)}</p>
        <p className="video-versions">Versions: {props.versions}</p>
      </div>
    </Link>
  );
};

export default VideoItem;
