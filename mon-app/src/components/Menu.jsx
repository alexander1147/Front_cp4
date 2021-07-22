import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <section>
      <header>
      <div><a></a></div>
      <div>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="personnages.html">Personnages</a></li>
          <li><a href="histoire.html">Histoire</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
      {/* <header>
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
      </header> */}
    </section>
  );
}

export default Menu;
