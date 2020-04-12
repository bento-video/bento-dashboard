import React, { Component } from "react";
import axios from 'axios';

const formData = new FormData();
const videofile = document.querySelector('#new_video');

class AddVideoForm extends Component {
  state = {};

  handleAddVideo = () => {
    console.log("in add vid method");
    formData.append("new_video", videofile.files[0]);
    axios.post('/videos', formData, {
      headers: {
        "Content-Type": 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response);
      }); // do something after video is uploaded
  }

  render() {
    return (
      <form /* action="#" method="post" */>
        <fieldset className="form-group">
          <input type="file" name="new_video" id="new_video" />
        </fieldset>
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" className="btn btn-success"/*  onClick={this.handleAddVideo} */>
            Upload
          </button>
        </div>
      </form>
    );
  }
}

export default AddVideoForm;
