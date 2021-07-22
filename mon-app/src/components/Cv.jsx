import React from "react";
import "./Cv.css";

function Cv() {
  return (
    <section className="">
      <div className="zoom">
        <li>
          <img
            className="grandePhoto"
            src="https://fr.strikingly.com/content/static/ebb99be55bfadd236424a80916402c40/d17c2/2021-03-18-portfolio-design-graphique.jpg"
            alt="img"
            onClick="http://localhost:3000/shop"
          />
        </li>
        <h3 className="text">Cv</h3>
      </div>
    </section>
  );
}

export default Cv;
