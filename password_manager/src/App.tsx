import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Auth} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default App;
