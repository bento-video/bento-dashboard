import React from "react";
import DeleteVideoForm from "./DeleteVideoForm";
import Modal from "react-bootstrap/Modal";

const DeleteVideoModal = (props) => {
  const modalTitle = "Are you sure you want to delete this video?";
  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DeleteVideoForm
          deleteType={props.deleteType}
          onClose={props.onClose}
          videoId={props.videoId}
        />
      </Modal.Body>
    </Modal>
  );
};

export default DeleteVideoModal;
