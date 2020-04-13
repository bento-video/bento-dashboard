import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./dashboard/Dashboard";
import Video from "./video/Video";
import axios from "axios";
import { getContentType } from "../helpers";

class App extends Component {
  state = {
    videos: null,
  };

  componentDidMount() {
    axios.get("http://localhost:3001/videos").then((res) => {
      console.log(res.data);
      this.setState({
        videos: res.data,
      });
      console.log("STATE: ", this.state.videos);
    });
  }

  handleVideoUpload = async (file) => {
    const getSignedUrlParams = { filename: file.name };
    const videoData = await axios
      .post("http://localhost:3001/videos/new", getSignedUrlParams)
      .then((res) => {
        console.log(res);
        return res.data;
      });

    const config = {
      headers: {
        "content-type": getContentType(file.name),
      },
    };
    console.log(config.headers);

    const videoUpload = await axios
      .post(videoData.url, file, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard
              videos={this.state.videos}
              onVideoUpload={this.handleVideoUpload}
            />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
