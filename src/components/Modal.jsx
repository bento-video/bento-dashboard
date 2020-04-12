import React from "react";

const Modal = (props) => {
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`${props.id}-title`}
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${props.id}-title`}>
              {props.title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
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
