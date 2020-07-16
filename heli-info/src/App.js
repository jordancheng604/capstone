import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Home from './Components/Main';
import OneHeli from './Components/OneHeli/OneHeli';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
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
