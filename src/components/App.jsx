import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./dashboard/Dashboard";
import Video from "./video/Video";
import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";
import { VIDEOS_ROUTE, FETCH_PRESIGNEDURL_ROUTE } from "../helpers/apiRoutes";
import { fetchVideos } from "../actions";

const App = () => {
  const [videos, setVideos] = useState(null);
  const [loadingVideos, setLoadingVideos] = useState(true);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(`Env: ${process.env.NODE_ENV}`);
    }
    const fetchVideosData = async () => {
      await fetchVideos().then((videos) => {
        setVideos(videos);
        setLoadingVideos(false);
      });
    };
    fetchVideosData();
  }, []);

  const handleDeleteVideo = async (videoId) => {
    setVideos(videos.filter((video) => video.id !== videoId));
    await axios
      .delete(`${VIDEOS_ROUTE}${videoId}`)
      .catch((err) => console.log(err));
  };

  const handleVideoUpload = async (file) => {
    // Get presigned url for upload
    const uploader = axios.create();
    loadProgressBar({}, uploader);
    const presignedPostData = await uploader
      .post(FETCH_PRESIGNEDURL_ROUTE, { filename: file.name })
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
    await uploader
      .post(presignedPostData.url, formData)
      .then((res) => {
        return res.status;
      })
      .catch((err) => console.log(err));

    // Update db with video data
    const addToTableParams = {
      id: presignedPostData.videoId,
      filename: file.name,
    };

    await uploader.post(VIDEOS_ROUTE, addToTableParams).then((res) => {
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
