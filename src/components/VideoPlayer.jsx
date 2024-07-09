import React from 'react';
import '../style/VideoPlayer.css';

const VideoPlayer = ({ src, poster, controls = true, autoplay = false, loop = false, muted = false }) => {
  return (
    <div className="video-container">
      <video 
        className="video-player"
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
      >
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default VideoPlayer;
