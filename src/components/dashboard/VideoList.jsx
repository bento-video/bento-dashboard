import React from "react";
import VideoItem from "./VideoItem";
import { sortFilenames } from "../../helpers";

const VideoList = (props) => {
  return props.loading ? (
    <div>
      <h5>Loading videos...</h5>
    </div>
  ) : (
    <div id="all-videos" className="list-group">
      {props.videos.sort(sortFilenames).map((video) => (
        <VideoItem
          videoId={video.id}
          filename={video.filename}
          resolution={video.resolution}
          size={video.size}
          versions={video.versions}
          key={video.id}
          uploading={video.uploading}
        />
      ))}
    </div>
  );
};

export default VideoList;
