import React, { Component } from "react";
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
            title: video.filename || "SoftServe.mkv",
            format: video.format || "mkv",
            resolution: video.resolution || "1920x1080",
            duration: video.duration || "2:22",
          }}
        />
        <VersionList />
      </main>
    </div>
  );
};

export default Video;
