import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Portfolio from "./components/Portfolio";
import Menu from "./components/Menu";
import Cv from "./components/Cv";
import Footer from "./components/Footer";
import Projets from "./components/Projets";
import Accueil from "./components/Accueil";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/Accueil">
          <Accueil />
        </Route>
        <Route path="/Cv">
          <Cv />
        </Route>
        <Route path="/Projets">
          <Projets />
        </Route>
      </Switch>
      {/* <Portfolio /> */}
      <Footer />
    </div>
  );
}

export default App;
