import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const videos = props.videos || [
    "SoftServe.mkv",
    "777Landing.mkv",
    "humility_original.mp4",
  ];

  return (
    <div id="all-videos" className="list-group">
      {videos.map((video, idx) => (
        <VideoItem
          filename={video.filename}
          resolution={video.resolution}
          size={video.size}
          versions={video.versions}
          key={idx}
        />
      ))}
    </div>
  );
};

export default VideoList;
