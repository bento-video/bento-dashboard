import React from "react";
import { Link } from "react-router-dom";

const VideoItem = (props) => {
  return (
    <Link to="/video" className="list-group-item list-group-item-action">
      <div className="video">
        <h4>{props.filename}</h4>
        <p className="video-versions">Resolution: {props.resolution}</p>
        <p className="video-versions">Size: {props.size}</p>
        <p className="video-versions">Versions: {props.versions}</p>
      </div>
    </Link>
  );
};

export default VideoItem;
