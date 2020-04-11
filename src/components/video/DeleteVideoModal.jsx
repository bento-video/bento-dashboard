import React from 'react';
import Modal from '../Modal';
import DeleteVideoForm from './DeleteVideoForm';

const DeleteVideoModal = (props) => {
  const title = "Are you sure you want to delete this video?";
  const modalId = `delete-${props.deleteType}-confirm-modal`;
  return (
    <Modal title={title} id={modalId}>
      <DeleteVideoForm id={props.id} deleteType={props.deleteType} />
    </Modal>
  );
}

export default DeleteVideoModal;