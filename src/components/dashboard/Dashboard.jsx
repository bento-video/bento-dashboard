import React from "react";
import VideoList from "./VideoList";
import AddVideo from "./AddVideo";

const Dashboard = ({ videos, loadingVideos, onVideoUpload }) => {
  return (
    <main className="container">
      <h2>Your videos</h2>
      <VideoList videos={videos} loading={loadingVideos} />
      <AddVideo onVideoUpload={onVideoUpload} />
    </main>
  );
};

export default Dashboard;
