import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Portfolio from "./components/Portfolio";
import Menu from "./components/Menu";
import Cv from "./components/Cv";
import Footer from "./components/Footer";
import Projets from "./components/Projets";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Cv">
          <Cv />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Projets">
          <Projets />
        </Route>
      </Switch>
      <Menu />
      {/* <Portfolio /> */}
      <Footer />
    </div>
  );
}

export default App;
