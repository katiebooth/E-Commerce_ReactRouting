import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShopContainer from './containers/ShopContainer';


function App() {
  return (
    <ShopContainer/>
  );
}

export default App;
