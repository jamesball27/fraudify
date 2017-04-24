import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { elapsed: 0 };
    this.duration = 0;

    this.togglePlay = this.togglePlay.bind(this);
    this.updateTimeline = this.updateTimeline.bind(this);
    this.movePlayhead = this.movePlayhead.bind(this);
    this.scrollPlayback = this.scrollPlayback.bind(this);
  }

  componentDidMount() {
    this.audio = document.getElementById('audio');
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.playQueue.length === 1 && this.props.playQueue !== newProps.playQueue) {
  //     this.setState({ audioUrl: newProps.playQueue[0].audioUrl, duration: this.audio.duration });
  //   }
  // }

  componentDidUpdate() {
    if (this.props.playQueue.length === 1 && !this.props.playing && this.state.elapsed === 0) {
      this.togglePlay();
    }
  }

  togglePlay() {

    if (!this.props.playing) {
      this.audio.play().then(() => {
        this.duration = this.audio.duration;
      });
      this.updateTimeline();
      this.props.playSong();
    } else {
      this.audio.pause();
      window.clearInterval(this.updateInterval);
      this.props.pauseSong();
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
    const playPercent = (this.state.elapsed / this.duration) * 100;
    playhead.style.marginLeft = playPercent + '%';
  }

  scrollPlayback(e) {
    e.preventDefault();
    e.stopPropagation();

    const timeline = document.getElementById('scrollbar');
    const timelineWidth = timeline.getBoundingClientRect().width;
    const timelineLeft = timeline.getBoundingClientRect().left;
    const clickPos = (e.clientX - timelineLeft) / timelineWidth;

    this.audio.currentTime = this.duration * clickPos;
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
    let pButtonUrl = this.props.playing ? window.images.pause : window.images.play;

    let audioUrl;
    if (this.props.playQueue[0]) {
      audioUrl = this.props.playQueue[0].audioUrl;
    }

    return(
      <div className="audio-player">

        <audio id="audio" src={ audioUrl }></audio>

        <img src={ pButtonUrl } className="p-button" onClick={ this.togglePlay } />

        <div className="timeline">
          <p>{ this.parseTime(this.state.elapsed) }</p>
          <div id="scrollbar" onClick={ this.scrollPlayback }>
            <div id="playhead"></div>
          </div>
          <p>{ this.parseTime(this.duration) }</p>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
