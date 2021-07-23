import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Portfolio from "./components/Portfolio";
import Menu from "./components/Menu";
import Cv from "./components/Cv";
import Footer from "./components/Footer";
import Projets from "./components/Projets";
import Accueil from "./components/Accueil";
import Contact from "./components/Contact";



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
        <Route path="/Contact">
          <Contact />
        </Route>
        <Accueil />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
