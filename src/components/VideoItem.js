import './VideoItem.css';
import React from 'react';

// Componente que toma la información recibida por la solicitud de Axios y muestra una
// pequeña muestra utilizando los datos de .snippet de youtube.
// se utiliza un poco de styling en .css para que la lista se mantenga ordenada y en grilla.

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
