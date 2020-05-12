import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Button from './shared/components/button';

function App() {
  return (
    <div className="App">
      <div className="normal buttons" >
        <Button className="btn-primary">primary</Button>
        <Button className="btn-secondary">secondary</Button>
        <Button className="btn-success">success</Button>
        <Button className="btn-info">info</Button>
        <Button className="btn-warning">warning</Button>
        <Button className="btn-danger">danger</Button>
        <Button className="btn-light">light</Button>
        <Button className="btn-dark">dark</Button>
      </div>
      <div className="outline buttons" >
        <Button className="btn-outline-primary">primary</Button>
        <Button className="btn-outline-secondary">secondary</Button>
        <Button className="btn-outline-success">success</Button>
        <Button className="btn-outline-info">info</Button>
        <Button className="btn-outline-warning">warning</Button>
        <Button className="btn-outline-danger">danger</Button>
        <Button className="btn-outline-light">light</Button>
        <Button className="btn-outline-dark">dark</Button>
      </div>
      
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
