import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { audioUrl: '', playing: false };

    this.play = this.play.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.audioUrl !== newProps.currentSong.audioUrl) {
      this.setState({ audioUrl: newProps.currentSong.audioUrl });
    }
  }

  play() {

    const audio = document.getElementById('audio');
    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true });

    } else {
      audio.pause();
      this.setState({ playing: false });

    }
  }

  render() {
    let pButtonUrl = this.state.playing ? window.images.pause : window.images.play;

    return(
      <div className="audio-player">

        <audio id="audio" src={ this.state.audioUrl }>

        </audio>

        <img src={ pButtonUrl } className="p-button" onClick={ this.play } />

      </div>
    );
  }
}

export default AudioPlayer;
