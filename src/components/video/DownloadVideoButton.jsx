import React from "react";
import Button from "react-bootstrap/Button";

const DownloadVideoButton = ({ versionUrl }) => {
  return (
    <Button href={versionUrl} variant="success">
      Download
    </Button>
  );
};

export default DownloadVideoButton;
