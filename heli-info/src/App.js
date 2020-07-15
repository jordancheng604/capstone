import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Home from './Components/Main'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/:modelname' component={OneHeli}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
