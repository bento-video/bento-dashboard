import React from 'react';
import Modal from '../Modal';
import DeleteVideoForm from './DeleteVideoForm';

const DeleteVideoModal = (props) => {
  const title = "Are you sure you want to delete this video?";
  const id = "delete-confirm-modal";
  const children = (
    <ul>
      <li>
        This will delete <strong>all versions</strong> of this
        video.
      </li>
      <li>This cannot be undone.</li>
    </ul>
  );
  return (
    <Modal title={title} children={children} id={id}>
      <DeleteVideoForm id={props.id} />
    </Modal>
  );
}

export default DeleteVideoModal;