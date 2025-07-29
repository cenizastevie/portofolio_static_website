import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
const credlyScript = document.createElement('script');
credlyScript.src = '//cdn.credly.com/assets/utilities/embed.js';
credlyScript.async = true;
document.body.appendChild(credlyScript);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
