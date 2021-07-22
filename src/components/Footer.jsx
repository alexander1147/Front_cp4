import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <article>
          <a href="https://www.pinterest.fr/">
            <img
              className="pinterest"
              src="https://www.evasionen2cv.com/wp-content/uploads/2016/03/Pinterest-Logo.png"
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="https://fr-fr.facebook.com/">
            <img
              className="facebook"
              src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png"
              alt=""
            />
          </a>
        </article>
        <article>
          <a href="https://www.instagram.com/">
            <img
              className="instagram"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
              alt=""
              onClick="http://localhost:3000/Contact"
            />
          </a>
        </article>
      </div>
    </section>
  );
}

export default Footer;
