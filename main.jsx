import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root')); // Creating the root element for the app
root.render(
  <React.StrictMode>
    <App />  {/* Rendering the App component */}
  </React.StrictMode>
);
