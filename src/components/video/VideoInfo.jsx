import React from 'react';
import DeleteVideoModal from './DeleteVideoModal';
import DeleteVideoButton from './DeleteVideoButton';

const VideoInfo = (props) => {
  const { title, format, resolution, duration } = props.video;
  return (
    <section id="original-video" class="jumbotron">
      <div class="row">
        <h2 class="title display-4">{title}</h2>
        <DeleteVideoButton deleteType={"video"} />
      </div>
      <hr class="my-4" />
      <ul class="list-group">
        <li class="list-group-item">{format}</li>
        <li class="list-group-item">{resolution}</li>
        <li class="list-group-item">{duration}</li>
      </ul>
      <DeleteVideoModal deleteType={'version'} />
      <DeleteVideoModal deleteType={'video'} />
    </section>
  );
}

export default VideoInfo;