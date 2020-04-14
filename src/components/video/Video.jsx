import React from "react";
import { useParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import VersionList from "./VersionList";

const Video = (props) => {
  const { id } = useParams();
  const video = props.loading
    ? null
    : props.videos.find((video) => video.id === id);
  return video ? (
    <div>
      <main class="container">
        <VideoInfo video={video} />
        <VersionList />
      </main>
    </div>
  ) : null;
};

export default Video;
