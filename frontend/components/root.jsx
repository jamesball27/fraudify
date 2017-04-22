import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import App from './app';
import AuthForm from './home/auth_form';
import HomePage from './home/home_page';
import MyMusic from './mymusic/mymusic';
import CollectionsIndex from './mymusic/collections_index';
import CollectionContainer from './collection/collection_container';
import SongsIndex from './songs/songs_index';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/mymusic/playlists");
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/home");
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRedirect to="home" />
          <Route path="home" component={ HomePage } onEnter={ _redirectIfLoggedIn } />
          <Route path="signup" component={ AuthForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="login" component={ AuthForm } onEnter={ _redirectIfLoggedIn } />

          <Route path="mymusic" component={ MyMusic } onEnter={ _ensureLoggedIn }>
            <IndexRedirect to="playlists" />
            <Route path="playlists" component={ CollectionsIndex } onEnter={ _ensureLoggedIn }/>
            <Route path="albums" component={ CollectionsIndex } onEnter={ _ensureLoggedIn }/>
            <Route path="songs" component={ SongsIndex } onEnter={ _ensureLoggedIn } />
            <Route path="artists" component={ CollectionsIndex } onEnter={ _ensureLoggedIn } />
          </Route>

          <Route path="playlists/:playlistId" component={ CollectionContainer } onEnter={ _ensureLoggedIn }/>
          <Route path="albums/:albumId" component={ CollectionContainer } onEnter={ _ensureLoggedIn }/>

          <Route path="search" />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
