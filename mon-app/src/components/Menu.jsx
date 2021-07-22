import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <section>
      <header>
        <div className="menu"></div>
        <nav className="menu">
          <ul>
            <li>
              <a href="https://fr.reactjs.org/docs/forms.html">Accueil</a>
            </li>
            <li>
              <a href="https://fr.reactjs.org/docs/forms.html">Projets</a>
            </li>
            <li>
              <a href="https://fr.reactjs.org/docs/forms.html">Cv</a>
            </li>
            <li>
              <a href="https://fr.reactjs.org/docs/forms.html">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default Menu;
