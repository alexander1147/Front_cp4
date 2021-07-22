import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <section className="menu">
      <div className="container">
        <article>
          <Link to="/Accueil">
            <h3 className="text">Accueil</h3>
          </Link>
        </article>
        <article>
          <Link to="/Projets">
            <h3 className="text">Projets</h3>
          </Link>
        </article>
        <article>
          <Link to="/Cv">
            <h3 className="text">Cv</h3>
          </Link>
        </article>
        <article>
          <Link to="/Contact">
            <h3 className="text">Contact</h3>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Menu;
