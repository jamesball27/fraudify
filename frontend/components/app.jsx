import React from 'react';
import StaticPage from './auth/static_page';

const App = ({ children }) => (
  <div>
    <h1>Welcome!</h1>
    { children }
  </div>
);

export default App;
