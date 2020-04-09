import React from 'react';
import VersionItem from './VersionItem';
import CreateVersionButton from './CreateVersionButton';
import CreateVersionModal from "./CreateVersionModal";

const VersionList = (props) => {
  const versions = [{ name: "SoftServe.mp4", resolution: "1080" }, { name: "SoftServe.mp4", resolution: "480" }];
  return (
    <section id="versions">
      <h2>Versions</h2>
      <ul class="versions list-group">
        {versions.map((version) => (
          <VersionItem title={version.title} resolution={version.resolution} />
        ))};
        <CreateVersionButton />
      </ul>
      <CreateVersionModal />
    </section>
  );
}

export default VersionList;