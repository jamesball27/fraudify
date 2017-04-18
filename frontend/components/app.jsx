import React from 'react';
import StaticPage from './auth/static_page';
import Splash from './auth/splash';

const App = ({ children }) => (
  <div>
    { children }
    <Splash />
  </div>
);

export default App;
