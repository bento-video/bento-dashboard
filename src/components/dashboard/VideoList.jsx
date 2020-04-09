import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  return (
    <div id="all-videos" className="list-group">
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </div>
  );
};

export default VideoList;
