import React from 'react';
import { connect } from 'react-redux';
import {  createPlaylist } from '../../actions/playlist_actions';
import MusicNavbar from '../shared/music_navbar';

class MyMusic extends React.Component {

  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.router.push('/home');
    }
  }

  render() {
    return(
      <main className="main-content">
        <MusicNavbar
          path={ this.props.route.path }
          createPlaylist={ this.props.createPlaylist }
        />

        { this.props.children }
      </main>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);
