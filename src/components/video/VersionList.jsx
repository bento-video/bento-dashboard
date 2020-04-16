import React from "react";
import VersionItem from "./VersionItem";
import CreateVersionButton from "./CreateVersionButton";
import { getVersionFilename } from "../../helpers";

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
        {props.versions.map((version, idx) => {
          // const filename = version.status === 'pending' ?
          return (
            <VersionItem
              key={version.id ? version.id : idx}
              versionId={version.id}
              filename={getVersionFilename(version)}
              versionUrl={version.versionUrl}
              resolution={version.resolution}
              status={version.status}
              onShowModal={props.onShowDeleteModal}
            />
          );
        })}

        <CreateVersionButton onClick={props.onShowCreateModal} />
      </ul>
    </section>
  );
};

export default VersionList;
