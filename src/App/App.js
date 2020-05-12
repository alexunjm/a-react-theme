import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Button from './shared/components/button';

function App() {
  return (
    <div className="App">
      <Button>Hola</Button>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
