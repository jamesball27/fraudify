import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/search_actions';
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
    // this.renderResults = this.renderResults.bind(this);
  }

  handleInput(e) {
    e.preventDefault();

    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchSearchResults(this.state.searchTerm);
  }

  // renderResults(indexType) {
  //   if (Object.keys(this.props.searchResults[indexType]).length === 0) {
  //     return(
  //       <h4>No Results Found</h4>
  //     );
  //   } else if (indexType === 'songs') {
  //     return(
  //       <SongsIndex search="true" />
  //     );
  //   } else {
  //     return(
  //       <CollectionsIndex indexType={ indexType } search="true"/>
  //     );
  //   }
  // }

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
  fetchSearchResults: (searchTerm) => dispatch(fetchSearchResults(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
