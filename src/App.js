import logo from './logo.svg';
import './App.css';
import Link from './Link';
import React from 'react';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Integrate from './Integrate';

function App() {
  return(
    <div>
      <Integrate /> 
    </div>
  )
}

export default App;
