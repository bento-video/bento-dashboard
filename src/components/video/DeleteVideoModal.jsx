import React from 'react';
import Modal from '../Modal';
import DeleteVersionForm from './DeleteVersionForm';

const DeleteVideoModal = (props) => {
  const title = "Are you sure you want to delete this video?";
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
    <Modal title={title} children={children}>
      <DeleteVersionForm id={props.id} />
    </Modal>
  );
}

export default DeleteVideoModal;