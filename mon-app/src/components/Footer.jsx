import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <section className="body">
      <div className="container">
        <article>
          <img
            className="photoKezako"
            src="mon-app/src/components/img/pinterest.svg"
            alt=""
          />
          <h3 className="text">Pinterest</h3>
        </article>

        <article>
          <img
            className="photoKezako"
            src="mon-app/src/components/img/Facebook.png"
            alt=""
          />
          <h3 className="text">Facebook</h3>
        </article>

        <article>
          <img
            className="photoKezako"
            src="mon-app/src/components/img/Insta.png"
            alt=""
            onClick="http://localhost:3000/Contact"
          />
          <h3 className="text">Instagram</h3>
        </article>
      </div>
    </section>
  );
}

export default Footer;
