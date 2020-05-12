import React from 'react';
import logo from './logo.svg';
import './style/default.scss';
import './App.scss';

import SassExample from './shared/components/SassExample';

function App() {
  return (
    <div className="App">
      <SassExample />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
