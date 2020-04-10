import React from 'react';
import Modal from '../Modal';
import CreateVersionForm from './CreateVersionForm';

const CreateVersionModal = () => {
  const title = "Create a new version";
  const id = "create-version-modal";

  return (
    <Modal id={id} title={title}>
      <CreateVersionForm />
    </Modal>
  );
}

export default CreateVersionModal;