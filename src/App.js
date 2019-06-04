import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Welcome to React Home</h1>}></Route>
            <Route  path="/login" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
