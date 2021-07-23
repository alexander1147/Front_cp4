import React from "react";
import "./Accueil.css";

function Accueil() {
  return (
    <section className="body">
      <div className="zoom">
        <a href="">
          <img
            className="grandePhoto"
            src="https://fr.strikingly.com/content/static/ebb99be55bfadd236424a80916402c40/d17c2/2021-03-18-portfolio-design-graphique.jpg"
            alt="photo"
            onClick="http://localhost:3000/shop"
          />
        </a>
      </div>
      <h3 className="textPhoto">Projets réalisées</h3>
      <div className="container">
        <article>
          <img
            className="photoPortfolio"
            src="https://bucket.mlcdn.com/a/3123/3123652/images/575af8a8a85f73d0cf1a0fec08f2380cdf1d956e.jpeg"
            alt=""
          />
          <h3 className="text">Projet 1</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maxime facere consequatur iusto expedita blanditiis quaerat
            quibusdam fugiat dolorem similique animi, repellendus eum ullam id
            tenetur dolores? Aperiam, libero blanditiis?
          </p>
        </article>

        <article>
          <img
            className="photoPortfolio"
            src="https://bucket.mlcdn.com/a/3123/3123652/images/575af8a8a85f73d0cf1a0fec08f2380cdf1d956e.jpeg"
            alt=""
          />
          <h3 className="text">Projet 2</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maxime facere consequatur iusto expedita blanditiis quaerat
            quibusdam fugiat dolorem similique animi, repellendus eum ullam id
            tenetur dolores? Aperiam, libero blanditiis?
          </p>
        </article>

        <article>
          <img
            className="photoPortfolio"
            src="https://bucket.mlcdn.com/a/3123/3123652/images/575af8a8a85f73d0cf1a0fec08f2380cdf1d956e.jpeg"
            alt=""
            onClick="http://localhost:3000/Contact"
          />
          <h3 className="text">Projet 3</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maxime facere consequatur iusto expedita blanditiis quaerat
            quibusdam fugiat dolorem similique animi, repellendus eum ullam id
            tenetur dolores? Aperiam, libero blanditiis?
          </p>
        </article>
      </div>
    </section>
  );
}

export default Accueil;
