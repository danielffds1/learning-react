//Index.js  da pasta src
import React from 'react';

//React-DOM é por manipular o dom do navigator, os element HTML
import ReactDOM from 'react-dom';

import './styles/global-styles.css';

import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
