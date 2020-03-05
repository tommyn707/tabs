import React from 'react';
import { render } from "react-dom";

import Tabs from './Tabs';

require('./styles.css');

function App() {
  return (
    <div>
      <h1>Tabs</h1>
      <Tabs>
        <div label="tab 1">
          This is tab 1
        </div>
        <div label="tab 2">
          This is tab 2
        </div>
        <div label="tab 3">
          This is tab 3
        </div>
      </Tabs>
    </div>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
render(<App />, container);