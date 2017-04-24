import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { audioUrl: '', playing: false, duration: null, elapsed: 0 };

    this.togglePlay = this.togglePlay.bind(this);
    this.updateTimeline = this.updateTimeline.bind(this);
    this.movePlayhead = this.movePlayhead.bind(this);
    this.scrollPlayback = this.scrollPlayback.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.audio = document.getElementById('audio');
    if (this.state.audioUrl !== newProps.currentSong.audioUrl) {
      this.setState({ audioUrl: newProps.currentSong.audioUrl });
    }
  }

  togglePlay() {
    if (!this.state.playing) {
      this.audio.play();
      this.updateTimeline();
      this.setState({ playing: true, duration: this.audio.duration });
    } else {
      this.audio.pause();
      window.clearInterval(this.updateInterval);
      this.setState({ playing: false });
    }
  }

  updateTimeline() {
    this.updateInterval = window.setInterval(() => {
      this.setState({ elapsed: this.audio.currentTime });
      this.movePlayhead();
    }, 1000);
  }

  movePlayhead() {
    const playhead = document.getElementById('playhead');
    const playPercent = (this.state.elapsed / this.state.duration) * 100;
    playhead.style.marginLeft = playPercent + '%';
  }

  scrollPlayback(e) {
    e.preventDefault();
    e.stopPropagation();

    const timeline = document.getElementById('scrollbar');
    const width = timeline.getBoundingClientRect().width;
    const left = timeline.getBoundingClientRect().left;
    const percent = (e.clientX - left) / width;

    this.audio.currentTime = this.state.duration * percent;
    this.setState({ elapsed: this.audio.currentTime });
  }

  parseTime(time) {
    const duration = Math.floor(time);
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration) - (minutes * 60);

    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${minutesString}:${secondsString}`;
  }

  render() {
    let pButtonUrl = this.state.playing ? window.images.pause : window.images.play;

    return(
      <div className="audio-player">

        <audio id="audio" src={ this.state.audioUrl }></audio>

        <img src={ pButtonUrl } className="p-button" onClick={ this.togglePlay } />

        <div className="timeline">
          <p>{ this.parseTime(this.state.elapsed) }</p>
          <div id="scrollbar" onClick={ this.scrollPlayback }>
            <div id="playhead"></div>
          </div>
          <p>{ this.parseTime(this.state.duration) }</p>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
