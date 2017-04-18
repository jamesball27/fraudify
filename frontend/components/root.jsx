import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import App from './app';
import AuthForm from './auth/auth_form';
import HomePage from './auth/home_page';
import MyMusicContainer from './mymusic/mymusic';
import CollectionsIndex from './mymusic/collections_index';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/mymusic/playlists");
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomePage } />
          <Route path="signup" component={ AuthForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="login" component={ AuthForm } onEnter={ _redirectIfLoggedIn } />
          <Route path="mymusic" component={ MyMusicContainer } >
            <IndexRedirect to="playlists" />
            <Route path="playlists" component={ CollectionsIndex } />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
