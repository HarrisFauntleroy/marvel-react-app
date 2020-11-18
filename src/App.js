import './App.css';
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Helper } from './components/characters/Helper';

const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Helper></Helper>
      </div>
    </BrowserRouter>
  );
}

export default App;
