import React from 'react';
import logo from './logo.svg';
import './shared/style/default.scss'
import './App.scss';

// import Button from './shared/components/button';
import {ButtonGroup} from './shared/components/example';

function App() {
  return (
    <div className="App">
      <ButtonGroup />
      <ButtonGroup outline={true} />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
