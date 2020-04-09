import React from "react";

const VideoItem = (props) => {
  return (
    <a className="list-group-item list-group-item-action">
      <div className="video">
        <h4>SoftServe.mkv</h4>
        <p className="video-versions">Versions: 1</p>
      </div>
    </a>
  );
};

export default VideoItem;
