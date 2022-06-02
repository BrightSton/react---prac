import React from "react";
import "./App.css";

import Start from "./Start";
import Card from "./Card";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Start />
        </Route>
        <Route path="/card" exact>
          <Card />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
