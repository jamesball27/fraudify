import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import AuthForm from './auth/auth_form';
import StaticPage from './auth/static_page';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" components={ App }>
        <IndexRoute component={ StaticPage } />
        <Route path="/signup" components={ AuthForm } />
        <Route path="/login" components={ AuthForm } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
