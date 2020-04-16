import React from "react";
import DeleteVideoForm from "./DeleteVideoForm";
import Modal from "react-bootstrap/Modal";

const DeleteVideoModal = ({
  show,
  onClose,
  deleteType,
  videoId,
  onDeleteVersion,
  onDeleteVideo,
}) => {
  const modalTitle = "Are you sure you want to delete this video?";
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DeleteVideoForm
          deleteType={deleteType}
          onClose={onClose}
          videoId={videoId}
          onDeleteVersion={onDeleteVersion}
          onDeleteVideo={onDeleteVideo}
        />
      </Modal.Body>
    </Modal>
  );
};

export default DeleteVideoModal;
