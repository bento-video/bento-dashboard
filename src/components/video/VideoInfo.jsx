import React, { Component } from "react";
import DeleteVideoButton from "./DeleteVideoButton";
import { formatSeconds } from "../../helpers";

class VideoInfo extends Component {
  render() {
    const { id, filename, format, resolution, duration } = this.props.video;

    return (
      <section id="original-video" className="jumbotron">
        <div className="row">
          <h2 id="original-title" className="display-4">
            {filename}
          </h2>
          <ul id="original-details" className="list-group ">
            <li className="list-group-item ">Format: {format}</li>
            <li className="list-group-item ">Resolution: {resolution}</li>
            <li className="list-group-item">
              Duration: {formatSeconds(duration)}
            </li>
          </ul>
          <DeleteVideoButton
            deleteType={"video"}
            onClick={this.props.onShowModal}
            videoId={id}
          />
        </div>
      </section>
    );
  }
}

export default VideoInfo;
