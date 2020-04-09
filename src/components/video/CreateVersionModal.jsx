import React from 'react';
import Modal from '../Modal';
import CreateVersionForm from './CreateVersionForm';

const CreateVersionModal = () => {
  const title = "Create a new version";
  const cmpntInfo = {
    id: "create-version-modal",
    label: "create-version-modal-title"
  };

  return (
    <Modal info={cmpntInfo} title={title}>
      <CreateVersionForm />
    </Modal>
  );
}

export default CreateVersionModal;