import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import AuthForm from './auth/auth_form';
import StaticPage from './static_page';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ StaticPage } />
        <Route path="/signup" component={ AuthForm } />
        <Route path="/login" component={ AuthForm } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
