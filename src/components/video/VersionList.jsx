import React from "react";
import VersionItem from "./VersionItem";
import CreateVersionButton from "./CreateVersionButton";
import CreateVersionModal from "./CreateVersionModal";

const VersionList = (props) => {
  return props.loading ? (
    <section id="versions">
      <h2>Versions</h2>
      <h5>Loading versions...</h5>
    </section>
  ) : (
    <section id="versions">
      <h2>Versions</h2>
      <ul className="versions list-group">
        {props.versions.map((version) => (
          <VersionItem
            key={version.id}
            versionId={version.id}
            title={version.versionUrl.split("/").pop()}
            versionUrl={version.versionUrl}
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
