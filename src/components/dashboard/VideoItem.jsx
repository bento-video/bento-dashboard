import React from "react";
import { Link } from "react-router-dom";

const VideoItem = (props) => {
  return (
    <Link to="/video" className="list-group-item list-group-item-action">
      <div className="video">
        <h4>{props.title}</h4>
        <p className="video-versions">Versions: 1</p>
      </div>
    </Link>
  );
};

export default VideoItem;
