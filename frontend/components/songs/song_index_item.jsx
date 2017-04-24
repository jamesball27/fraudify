import React from 'react';
import SongModal from './song_modal';
import { withRouter } from 'react-router';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  parseDuration(duration) {

    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);

    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${minutesString}:${secondsString}`;
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.receiveCurrentSong(this.props.song);
  }

  render() {
    if (this.props.fetching) {
      return <div></div>;
      } else {
        let artistAlbum;
        if (!this.props.router.location.pathname.startsWith('/albums')) {
          artistAlbum =
          <h5>
            { this.props.song.artist }
            <span>•</span>
            { this.props.song.album }
          </h5>;
        }

      return(
        <li className="songs-index-item">
          <div className="song-item-left">
            <h4>{ this.props.song.title }</h4>
            { artistAlbum }
          </div>

          <div className="song-item-right">
            <img src={ window.images.play } onClick={ this.handleClick } />
            <SongModal
              playlists={ this.props.playlists }
              createPlaylistSong={ this.props.createPlaylistSong }
              songId={ this.props.song.id }
              />
            <h6>{ this.parseDuration(this.props.song.duration) }</h6>
          </div>
        </li>
      );
    }
  }
}

export default withRouter(SongIndexItem);
