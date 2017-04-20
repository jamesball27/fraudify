import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchPlaylists } from './actions/playlist_actions';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);

  // window.store = store;
  // window.fetchPlaylists = fetchPlaylists;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
