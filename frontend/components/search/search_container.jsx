import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/search_actions';
import CollectionsIndex from '../mymusic/collections_index';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  handleInput(e) {
    e.preventDefault();

    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchSearchResults(this.state.searchTerm);
  }

  renderResults(indexType) {
    if (Object.keys(this.props.searchResults[indexType]).length === 0) {
      return(
        <div>
          <h2>No Results Found</h2>
        </div>
      );
    } else {
      return(
        <CollectionsIndex indexType={ indexType } search="true"/>
      );
    }
  }

  render() {
    if (this.props.searchResults.playlists)
    return(
      <main className="search">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Search for playlists, songs, albums, and artists"
            value={ this.state.searchTerm }
            onChange={ this.handleInput }
          />
          <button></button>
        </form>
        <h2>Playlists</h2>
        { this.renderResults('playlists') }
        <h2>Albums</h2>
        { this.renderResults('albums') }
        <h2>Artists</h2>
        { this.renderResults('artists') }
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
