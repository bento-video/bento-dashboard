import React from 'react';
import DeleteVideoModal from './DeleteVideoModal';

const VideoInfo = (props) => {
  const { title, format, resolution, duration } = props.video;
  return (
    <section id="original-video" class="jumbotron">
      <div class="row">
        <h2 class="title display-4">{title}</h2>
        <button
          id="delete-original"
          type="button"
          class="btn btn-danger"
          data-toggle="modal"
          data-target="#delete-confirm-modal"
        >
          Delete
              </button>
      </div>
      <hr class="my-4" />
      <ul class="list-group">
        <li class="list-group-item">{format}</li>
        <li class="list-group-item">{resolution}</li>
        <li class="list-group-item">{duration}</li>
      </ul>
      <DeleteVideoModal />
    </section>
  );
}

export default VideoInfo;