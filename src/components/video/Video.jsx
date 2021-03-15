import React from 'react';
import { Player } from 'video-react';
import './Video.scss';

const Video = ({ src = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', poster = '/assets/poster.png' }) => (
  <div className="Video">
    <Player
      playsInline
      poster={poster}
      src={src}
    />
  </div>
);

export default Video;
