import React from "react";
import Modal from "react-bootstrap/Modal";
import CreateVersionForm from "./CreateVersionForm";

const CreateVersionModal = ({
  show,
  videoId,
  filename,
  resLimit,
  onClose,
  onCreateVersion,
}) => {
  const title = "Create a new version";
  const id = "create-version-modal";

  return (
    <Modal show={show} onHide={onClose} id={id}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateVersionForm
          videoId={videoId}
          filename={filename}
          resLimit={resLimit}
          onCreateVersion={onCreateVersion}
          onClose={onClose}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CreateVersionModal;
