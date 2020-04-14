import React from "react";
import VersionItem from "./VersionItem";
import CreateVersionButton from "./CreateVersionButton";
import CreateVersionModal from "./CreateVersionModal";

const VersionList = (props) => {
  const versions = [
    { filename: "SoftServe.mp4", resolution: "1080" },
    { filename: "SoftServe.mp4", resolution: "480" },
  ];
  return (
    <section id="versions">
      <h2>Versions</h2>
      <ul className="versions list-group">
        {versions.map((version, idx) => (
          <VersionItem
            key={idx}
            videoId={idx}
            title={version.filename}
            resolution={version.resolution}
            onShowModal={props.onShowModal}
          />
        ))}

        <CreateVersionButton />
      </ul>
      <CreateVersionModal />
    </section>
  );
};

export default VersionList;
