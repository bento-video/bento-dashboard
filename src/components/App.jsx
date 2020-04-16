import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./dashboard/Dashboard";
import Video from "./video/Video";
import axios from "axios";
import { fetchVideos } from "../actions";

const App = () => {
  const [videos, setVideos] = useState(null);
  const [loadingVideos, setLoadingVideos] = useState(true);

  useEffect(() => {
    const fetchVideosData = async () => {
      await fetchVideos().then((videos) => {
        setVideos(videos);
        setLoadingVideos(false);
      });
    };
    fetchVideosData();
  }, []);

  const handleDeleteVideo = async (videoId) => {
    console.log("Handling deletion of video id", videoId);
    setVideos(videos.filter((video) => video.id !== videoId));
    await axios
      .delete(`http://localhost:3001/videos/${videoId}`)
      .then((_) => console.log("Deletion successful"))
      .catch((err) => console.log(err));
    // await fetchVideos().then(setVideos(videos));
  };

  const handleVideoUpload = async (file) => {
    // Get presigned url for upload
    const presignedPostData = await axios
      .post("http://localhost:3001/videos/new", { filename: file.name })
      .then((res) => {
        console.log(res);
        return res.data;
      });
    const { key: filename } = presignedPostData.fields;
    const pendingVideo = {
      uploading: true,
      id: "pending-video",
      filename: `${filename} (Upload in progress)`,
      size: "TBD",
      resolution: "TBD",
      versions: 0,
    };
    setVideos([...videos, pendingVideo]);

    // Create formdata for file upload
    console.log(presignedPostData);
    const formData = new FormData();
    Object.keys(presignedPostData.fields).forEach((key) => {
      formData.append(key, presignedPostData.fields[key]);
    });
    formData.append("file", file);

    //File upload
    await axios
      .post(presignedPostData.url, formData)
      .then((res) => {
        console.log("Response from s3: " + JSON.stringify(res));
        return res.status;
      })
      .catch((err) => console.log(err));

    // Update db with video data
    const addToTableParams = {
      id: presignedPostData.videoId,
      filename: file.name,
    };

    await axios
      .post("http://localhost:3001/videos/", addToTableParams)
      .then((res) => {
        console.log(res);
        const videoData = res.data;
        setVideos([...videos, videoData]);
      });
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard
            videos={videos}
            loadingVideos={loadingVideos}
            onVideoUpload={handleVideoUpload}
          />
        </Route>
        <Route path="/videos/:id">
          <Video
            loadingVideos={loadingVideos}
            videos={videos}
            onDeleteVideo={handleDeleteVideo}
          />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
