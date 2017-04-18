import React from 'react';
import StaticPage from './static_page';

const App = ({ children }) => (
  <div>
    <h1>Welcome!</h1>
    { children }
  </div>
);

export default App;
