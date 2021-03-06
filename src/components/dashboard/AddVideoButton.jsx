import React from "react";

const AddVideoButton = (props) => {
  return (
    <a href="#" onClick={props.onClick} id="add-video" className="d-flex">
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
    </a>
  );
};

export default AddVideoButton;
