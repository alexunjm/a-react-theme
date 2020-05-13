import React from 'react';
import './SassExample.scss';

function SassExample() {
  return (
    <div className="SassExample">
      <h1>Título h1</h1>
      <h2>Título h2</h2>
      <h3>Título h3</h3>
      <h4>Título h4</h4>

      <p>This is a paragraph.</p>
      <div id="container">This is some text inside a container.
        <button className="button-report" >Report button</button>
      </div>

    </div>
  );
}

export default SassExample;
