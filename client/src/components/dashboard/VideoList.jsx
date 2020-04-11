import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const videos = ["SoftServe.mkv", "777Landing.mkv", "humility_original.mp4"];

  return (
    <div id="all-videos" className="list-group">
      {videos.map((videoName, idx) => (
        <VideoItem title={videoName} key={idx} />
      ))}
    </div>
  );
};

export default VideoList;
