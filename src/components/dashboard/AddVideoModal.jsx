import React from "react";
import Modal from "react-bootstrap/Modal";
import AddVideoForm from "./AddVideoForm";

const AddVideoModal = (props) => {
  const modalTitle = "Upload a new video";
  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddVideoForm
          onVideoUpload={props.onVideoUpload}
          onClose={props.onClose}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddVideoModal;
