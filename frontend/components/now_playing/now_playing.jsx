import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { playSong, pauseSong } from '../../actions/now_playing_actions';

class NowPlaying extends React.Component {

  render() {
    return(
      <section className="now-playing">
        <AudioPlayer
          currentSong={ this.props.currentSong }
          playSong={ this.props.playSong }
          pauseSong={ this.props.pauseSong }
          playing={ this.props.playing }
          playQueue={ this.props.playQueue }
        />
      </section>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.session.currentUser,
  currentSong: store.nowPlaying.currentSong,
  playing: store.nowPlaying.playing,
  playQueue: store.playQueue
});

const mapDispatchToProps = dispatch => ({
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong())
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
