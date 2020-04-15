import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import VersionList from "./VersionList";
import DeleteVideoModal from "./DeleteVideoModal";
import axios from "axios";

const Video = (props) => {
  const [showModal, setModal] = useState(false);
  const [modalVideoId, setModalId] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [versions, setVersions] = useState([]);
  const [loadingVersions, setLoading] = useState(true);

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

  const video = props.loadingVideos
    ? null
    : props.videos.find((video) => video.id === id);

  useEffect(() => {
    if (video) {
      const fetchData = async () => {
        const versionData = await axios
          .get(`http://localhost:3001/videos/${id}`)
          .then((res) => {
            console.log(res.data.versions);
            return res.data.versions;
          });
        setVersions(versionData);
        setLoading(false);
      };

      fetchData();
    }
  }, [video]);

  return video ? (
    <div>
      <main class="container">
        <VideoInfo video={video} onShowModal={handleShow} />
        <VersionList
          versions={versions}
          onShowModal={handleShow}
          loading={loadingVersions}
        />
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
