import React from "react";
import VideoList from "./VideoList";
import AddVideo from "./AddVideo";

const Dashboard = (props) => {
  return (
    <main className="container">
      <h2>Your videos</h2>
      <VideoList videos={props.videos} loading={props.loading} />
      <AddVideo onVideoUpload={props.onVideoUpload} />
    </main>
  );
};

export default Dashboard;
