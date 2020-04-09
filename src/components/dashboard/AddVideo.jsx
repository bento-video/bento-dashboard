import React from "react";
import AddVideoButton from "./AddVideoButton";
// import Modal from "../Modal";
import AddVideoForm from "./AddVideoForm";
import AddVideoModal from "./AddVideoModal";

const AddVideo = (props) => {
  return (
    <div>
      <AddVideoButton />
      <AddVideoModal />
    </div>
  );
};

export default AddVideo;
