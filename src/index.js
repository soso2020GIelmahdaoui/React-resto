import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ArticleProvider from './contexts/ArticleContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);



ReactDOM.render(
  <ArticleProvider>
    <App />
  </ArticleProvider>,
  document.getElementById('root')
);
