import React from "react";
import { Route } from "react-router-dom";

import Week from "./Week";
import Average from "./Average";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Week />
      </Route>
      <Route path="/average/:week_day" exact>
        <Average />
      </Route>
    </div>
  );
}

export default App;
