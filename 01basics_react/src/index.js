// React hamari core foundational library h jo ki sare references lene ka kam karti h
import React from 'react';
// ReactDOM iska implementation h web pe
import ReactDOM from 'react-dom/client';
import App from './App';

// This is the reference to the element root
const root = ReactDOM.createRoot(document.getElementById('root'));

// render the HTML element

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

