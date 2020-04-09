import React from "react";

const Modal = (props) => {
  return (
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
              {props.title}
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
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
