import React from "react";

const CreateVersionButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <li id="create-version" className="item list-group-item">
      <svg
        className="bi bi-plus"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
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
      </svg>
      <a href="#" onClick={handleClick} id="create-version-btn">
        <p>Create a new version</p>
      </a>
    </li>
  );
};

export default CreateVersionButton;
