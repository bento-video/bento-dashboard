import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  return props.loading ? (
    <div>
      <h5>Loading videos...</h5>
    </div>
  ) : (
    <div id="all-videos" className="list-group">
      {props.videos.map((video, idx) => (
        <VideoItem
          videoId={video.id}
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
