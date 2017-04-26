import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults, clearSearchResults } from '../../actions/search_actions';
import CollectionsIndex from '../mymusic/collections_index';
import SongsIndex from '../songs/songs_index';
import MusicNavbar from '../shared/music_navbar';
import SearchResults from './search_results';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.searchResults !== newProps.searchResults) {
  //     this.props.clearSearchResults();
  //   }
  // }

  handleInput(e) {
    e.preventDefault();

    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearSearchResults();
    this.props.fetchSearchResults(this.state.searchTerm);
  }

  render() {
    if (this.props.searchResults.playlists)
    return(
      <main className="search">
        <form onSubmit={ this.handleSubmit }>
          <label>Search for playlists, songs, albums, and artists</label>
          <br />
          <input
            type="text"
            placeholder="Start typing..."
            value={ this.state.searchTerm }
            onChange={ this.handleInput }
          />
          <button></button>
        </form>
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
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
