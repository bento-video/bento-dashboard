import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import VersionList from "./VersionList";
import DeleteVideoModal from "./DeleteVideoModal";

const Video = (props) => {
  const [showModal, setModal] = useState(false);
  const [modalVideoId, setModalId] = useState(null);
  const [modalType, setModalType] = useState(null);
  const { id } = useParams();

  const handleShow = (videoId, deleteType) => {
    setModal(true);
    setModalId(videoId);
    setModalType(deleteType);
  };
  const handleClose = () => {
    setModal(false);
    setModalId(null);
    setModalType(null);
  };

  const video = props.loading
    ? null
    : props.videos.find((video) => video.id === id);

  return video ? (
    <div>
      <main class="container">
        <VideoInfo video={video} onShowModal={handleShow} />
        <VersionList onShowModal={handleShow} />
        <DeleteVideoModal
          deleteType={modalType}
          show={showModal}
          onClose={handleClose}
          videoId={modalVideoId}
        />
      </main>
    </div>
  ) : null;
};

export default Video;
