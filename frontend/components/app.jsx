import React from 'react';
import Sidebar from './shared/sidebar';
import NowPlaying from './shared/now_playing';

const App = ({ children }) => (
  <div>
    <Sidebar />
    <NowPlaying />
    { children }
  </div>
);

export default App;
