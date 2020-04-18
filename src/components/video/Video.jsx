import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useInterval from "../../helpers/useInterval";
import VideoInfo from "./VideoInfo";
import VersionList from "./VersionList";
import DeleteVideoModal from "./DeleteVideoModal";
import CreateVersionModal from "./CreateVersionModal";
import axios from "axios";
import { fetchVersions } from "../../actions";
import { VIDEOS_ROUTE, VERSIONS_ROUTE } from "../../helpers/apiRoutes";

const Video = ({ videos, loadingVideos, onDeleteVideo }) => {
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [showCreateModal, setCreateModal] = useState(false);
  const [deleteModalVideoId, setDeleteModalId] = useState(null);
  const [deleteModalType, setDeleteModalType] = useState(null);
  const [versions, setVersions] = useState([]);
  const [loadingVersions, setLoading] = useState(true);
  const [pendingVersionId, setPendingVersionId] = useState(null);

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

    await axios
      .post(`${VIDEOS_ROUTE}${id}/new`, params)
      .then((res) => {
        setPendingVersionId(res.data.jobId);

        const pendingVersion = {
          id: res.data.jobId,
          filename: filename.split(".")[0],
          resolution,
          outputType: ".mp4",
          status: "pending",
        };
        setVersions([...versions, pendingVersion]);
      })
      .catch((err) => console.log(err));
  };

  const checkVersionStatus = async () => {
    if (!pendingVersionId) {
      return;
    }

    await axios.get(`${VERSIONS_ROUTE}${pendingVersionId}`).then((resp) => {
      if (resp.data.status && resp.data.status === "completed") {
        setVersions([
          ...versions.filter((version) => version.id !== pendingVersionId),
          resp.data,
        ]);

        setPendingVersionId(null);
      }
    });
  };

  // Sets interval to check on version status if there is a pending version
  useInterval(checkVersionStatus, pendingVersionId ? 10000 : null);

  const handleDeleteVersion = async (versionId) => {
    setVersions(versions.filter((version) => version.id !== versionId));
    await axios
      .delete(`${VERSIONS_ROUTE}${versionId}`)
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
