import React, { Component } from 'react';
import { connect } from 'react-redux';

import Video from './Video';
import './Results.css';

class Results extends Component {
  render () {
    const { videos } = this.props;

    return (
      <main className="youtube-results">
        <h2 className="youtube-results__summary">Found {videos.length} videos</h2>
        <ul className="youtube-results__video-list">
          {videos.map((video, index) => (
            <Video img={video.snippet.thumbnails.medium.url} title={video.snippet.title} key={index}/>
          ))}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.results
});

export default connect(mapStateToProps)(Results);
