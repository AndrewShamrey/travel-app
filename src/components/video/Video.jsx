import React from 'react';
import ReactPlayer from 'react-player';
import './Video.scss';

const Video = ({ src = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', poster = '/assets/poster.png' }) => (
  <ReactPlayer
    url={src}
    controls
    className="Video"
    width="100%"
    height="250px"
  />
);

export default Video;
