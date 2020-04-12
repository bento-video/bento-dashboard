import React, { Component } from "react";
import VideoInfo from './VideoInfo';
import VersionList from './VersionList';

class Video extends Component {
  state = {};
  render() {
    return (
      <div>
        <main class="container">
          <VideoInfo video={{ title: "SoftServe.mkv", format: "mkv", resolution: "1920x1080", duration: "2:22" }} />
          <VersionList />
          {/* <VideoNotFound /> wrapped in conditional */}
        </main>
      </div>
    );
  }
}

export default Video;
