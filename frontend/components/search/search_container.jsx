import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults, clearSearchResults } from '../../actions/search_actions';
import CollectionsIndex from '../mymusic/collections_index';
import SongsIndex from '../songs/songs_index';
import MusicNavbar from '../shared/music_navbar';
import SearchResults from './search_results';
import { receivePlaylists } from '../../actions/playlist_actions';
import { receiveAlbums } from '../../actions/album_actions';
import { receiveArtists } from '../../actions/artist_actions';
import { fetchFollows } from '../../actions/follow_actions';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchFollows();
  }

  componentWillUnmount() {
    this.props.clearSearchResults();
  }

  componentWillReceiveProps() {
    if (this.state.searchTerm === '') {
      this.props.clearSearchResults();
    }
  }

  handleInput(e) {
    e.preventDefault();

    this.props.clearSearchResults();
    this.props.fetchSearchResults(e.target.value)
      .then(results => {
        this.props.receivePlaylists(results.playlists);
        this.props.receiveAlbums(results.albums);
        this.props.receiveArtists(results.artists);
      });

    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return(
      <main className="search">
        <div className="form">
          <label>Search for playlists, songs, albums, and artists</label>
          <br />
          <input
            type="text"
            placeholder="Start typing..."
            value={ this.state.searchTerm }
            onChange={ this.handleInput }
          />
        </div>
        <MusicNavbar path="search"/>
        <div className="search-results">
          <SearchResults indexType={ this.props.router.path } searchResults={ this.props.searchResults }/>
        </div>
      </main>
    );
  }
}


const mapStateToProps = ({ searchResults }) => ({
  searchResults
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: (searchTerm) => dispatch(fetchSearchResults(searchTerm)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  receivePlaylists: (playlists) => dispatch(receivePlaylists(playlists)),
  receiveAlbums: (albums) => dispatch(receiveAlbums(albums)),
  receiveArtists: (artists) => dispatch(receiveArtists(artists)),
  fetchFollows: () => dispatch(fetchFollows())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
