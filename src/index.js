import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import DataContext from './contexts/DataContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <DataContext>
    <App />
  </DataContext>,
  document.getElementById('root')
);

serviceWorker.unregister();
