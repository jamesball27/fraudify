import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { createPlaylistSong } from './actions/playlist_song_actions';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);

  window.store = store;
  window.createPlaylistSong = createPlaylistSong;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
