import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { JobsProvider } from './context/JobsContext';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <JobsProvider>
      <App />
    </JobsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);