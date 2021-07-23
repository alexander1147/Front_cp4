import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <section className="menu">
      <img className="logo" src="src/img/logo1.png" alt="" />
      <div className="container">
        <article>
          <Link to="/Accueil">
            <h3 className="h3">Accueil</h3>
          </Link>
        </article>
        <article>
          <Link to="/Projets">
            <h3 className="h3">Projets</h3>
          </Link>
        </article>
        <article>
          <Link to="/Cv">
            <h3 className="h3">Cv</h3>
          </Link>
        </article>
        <article>
          <Link to="/Contact">
            <h3 className="h3">Contact</h3>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Menu;
