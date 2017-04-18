import React from 'react';
import StaticPage from './auth/static_page';
import Splash from './auth/splash';

const App = ({ children }) => (
  <div>
    <h1>Welcome!</h1>
    { children }
    <Splash />
  </div>
);

export default App;
