import React from "react";
import "./Projets.css";

function Projets() {
  return (
    <section className="body">
      <div className="container">
        <article>
          <img
            className="photoPortfolio"
            src="https://yannjarno.com/wp-content/uploads/2015/11/comment-devenir-developpeur-web-freelance-1200x600.jpg"
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
            src="https://yannjarno.com/wp-content/uploads/2015/11/comment-devenir-developpeur-web-freelance-1200x600.jpg"
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
            src="https://yannjarno.com/wp-content/uploads/2015/11/comment-devenir-developpeur-web-freelance-1200x600.jpg"
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

export default Projets;
