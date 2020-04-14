import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./dashboard/Dashboard";
import Video from "./video/Video";
import axios from "axios";

class App extends Component {
  state = {
    videos: null,
    loading: true,
  };

  componentDidMount() {
    axios.get("http://localhost:3001/videos").then((res) => {
      console.log(res.data);
      this.setState({
        videos: res.data,
        loading: false,
      });
      console.log("STATE: ", this.state.videos);
    });
  }

  handleVideoUpload = async (file) => {
    const presignedPostData = await axios
      .post("http://localhost:3001/videos/new", { filename: file.name })
      .then((res) => {
        console.log(res);
        return res.data;
      });

    console.log(presignedPostData);
    const formData = new FormData();
    Object.keys(presignedPostData.fields).forEach((key) => {
      formData.append(key, presignedPostData.fields[key]);
    });
    formData.append("file", file);

    const videoUpload = await axios
      .post(presignedPostData.url, formData)
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
              loading={this.state.loading}
              onVideoUpload={this.handleVideoUpload}
            />
          </Route>
          <Route path="/videos/:id">
            <Video videos={this.state.videos} />
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
