import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./dashboard/Dashboard";
import Video from "./video/Video";
import axios from "axios";

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
      // const videos = res.data;
      // this.setState({ videos })      something like this
      //this cmpnt should mount, axios then does get / to get all videos,
      // and we should have that obj in the res.
    });
  }

  handleVideoUpload = (file) => {
    const startUploadParams = JSON.stringify({ filename: file.name });
    axios
      .post("http://localhost:3001/videos/new", startUploadParams)
      .then((data) => {
        console.log(data);
      });
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
