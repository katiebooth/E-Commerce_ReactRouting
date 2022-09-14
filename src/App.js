import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShopContainer from './containers/ShopContainer';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
<Router>
  <NavBar/>
  <Routes>
    <Route path = '/' element={<ShopContainer/>}/>
    <Route path = '*' element={<ErrorPage/>}/>
  </Routes>
</Router>
  );
}

export default App;
