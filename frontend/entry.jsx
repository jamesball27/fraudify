import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as SessionUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.signUp = SessionUtil.signUp;
  window.logIn = SessionUtil.logIn;
  window.logOut= SessionUtil.logOut;
  window.store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
