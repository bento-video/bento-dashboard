import React from "react";
import Modal from "../Modal";
import AddVideoForm from "./AddVideoForm";

const AddVideoModal = () => {
  const modalTitle = "Upload a new video";
  return (
    <Modal title={modalTitle} id="upload-video-modal">
      <AddVideoForm />
    </Modal>
  );
};

export default AddVideoModal;
