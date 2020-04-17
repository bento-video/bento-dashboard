import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import VersionList from "./VersionList";
import DeleteVideoModal from "./DeleteVideoModal";
import CreateVersionModal from "./CreateVersionModal";
import axios from "axios";
import { fetchVersions } from "../../actions";

const Video = ({ videos, loadingVideos, onDeleteVideo }) => {
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [showCreateModal, setCreateModal] = useState(false);
  const [deleteModalVideoId, setDeleteModalId] = useState(null);
  const [deleteModalType, setDeleteModalType] = useState(null);
  const [versions, setVersions] = useState([]);
  const [loadingVersions, setLoading] = useState(true);

  const { id } = useParams();

  const handleShowDeleteModal = (videoId, deleteType) => {
    setDeleteModal(true);
    setDeleteModalId(videoId);
    setDeleteModalType(deleteType);
  };
  const handleCloseDeleteModal = () => {
    setDeleteModal(false);
    setDeleteModalId(null);
    setDeleteModalType(null);
  };

  const handleShowCreateModal = () => setCreateModal(true);
  const handleCloseCreateModal = () => setCreateModal(false);

  const video = loadingVideos ? null : videos.find((video) => video.id === id);

  useEffect(() => {
    if (video) {
      const fetchVersionData = async () => {
        await fetchVersions(id).then((versionData) => {
          setVersions(versionData);
          setLoading(false);
        });
      };

      fetchVersionData();
    }
  }, [video, id]);

  const handleCreateVersion = async (id, filename, resolution) => {
    const params = {
      filename,
      id,
      resolution,
    };

    console.log(`creating version with params: ${params}`);
    await axios
      .post(`http://localhost:3001/videos/${id}/new`, params)
      .then((res) => {
        console.log(`Received response: ${JSON.stringify(res)}`);
        const pendingVersion = {
          filename: filename.split(".")[0],
          resolution,
          outputType: ".mp4",
          status: "pending",
        };
        console.log("planning to add", JSON.stringify(pendingVersion));
        setVersions([...versions, pendingVersion]);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteVersion = async (versionId) => {
    console.log("Handling deletion of version", versionId);
    setVersions(versions.filter((version) => version.id !== versionId));
    await axios
      .delete(`http://localhost:3001/versions/${versionId}`)
      .then((_) => console.log("Deletion successful"))
      .catch((err) => console.log(err));

    await fetchVersions(id).then(setVersions);
  };

  return video ? (
    <div>
      <main className="container">
        <VideoInfo video={video} onShowModal={handleShowDeleteModal} />
        <VersionList
          video={video}
          versions={versions}
          onShowDeleteModal={handleShowDeleteModal}
          loading={loadingVersions}
          onShowCreateModal={handleShowCreateModal}
          onDelete={handleDeleteVersion}
        />
        <DeleteVideoModal
          deleteType={deleteModalType}
          show={showDeleteModal}
          onClose={handleCloseDeleteModal}
          videoId={deleteModalVideoId}
          onDeleteVersion={handleDeleteVersion}
          onDeleteVideo={onDeleteVideo}
        />
        <CreateVersionModal
          resLimit={video.resolution}
          show={showCreateModal}
          filename={video.filename}
          videoId={video.id}
          onClose={handleCloseCreateModal}
          onCreateVersion={handleCreateVersion}
        />
      </main>
    </div>
  ) : null;
};

export default Video;
