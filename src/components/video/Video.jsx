import React from "react";
import { useParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import VersionList from "./VersionList";

const Video = (props) => {
  const { id } = useParams();
  const video = props.videos.find((video) => video.id === id);
  return (
    <div>
      <main class="container">
        <VideoInfo
          video={{
            title: video.filename,
            format: video.format,
            resolution: video.resolution,
            duration: video.duration,
          }}
        />
        <VersionList />
      </main>
    </div>
  );
};

export default Video;
