import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './audio_player';

class NowPlaying extends React.Component {

  render() {
    return(
      <section className="now-playing">
        <p>now playing here</p>
        <AudioPlayer
          currentSong={ this.props.currentSong }
        />
      </section>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.session.currentUser,
  currentSong: store.currentSong
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps)(NowPlaying);
