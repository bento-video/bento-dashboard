import React from "react";
import AddVideoButton from "./AddVideoButton";

const AddVideo = (props) => {
  return (
    <div>
      <AddVideoButton />
      <div
        className="modal fade"
        id="upload-video-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="upload-video-modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="upload-video-modal-title">
                Upload a new video
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#" method="post">
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
                  <button type="submit" className="btn btn-success">
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
