import React from 'react';
import './App.css';
import './AppJs.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register/Register'
require('typeface-roboto')

function App() {
  return (
    <div className="container main">
      <Register />
    </div>
  );
}

export default App;
