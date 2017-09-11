import React from 'react';

const Video = ({ img, title }) => (
  <li className="youtube-results__video">
    <img className="youtube-results__video-image" src={img} alt={title}/>
    <h3 className="youtube-results__video-title">{title}</h3>
  </li>
);

export default Video;
