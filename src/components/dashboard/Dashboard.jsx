import React from "react";

const Dashboard = (props) => {
  return (
    <main className="container">
      <h2>Your videos</h2>

      <div id="all-videos" className="list-group">
        <a className="list-group-item list-group-item-action">
          <div className="video">
            <h4>SoftServe.mkv</h4>
            <p className="video-versions">Versions: 1</p>
          </div>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="video">
            <h4>777Landing.mkv</h4>
            <p className="video-versions">Versions: 3</p>
          </div>
        </a>
      </div>
      <div id="add-video" className="d-flex">
        <svg
          className="bi bi-plus-square"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          data-toggle="modal"
          data-target="#upload-video-modal"
        >
          <path
            fillRule="evenodd"
            d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
            clipRule="evenodd"
          />
        </svg>
        <p>Add a video</p>
      </div>
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
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
