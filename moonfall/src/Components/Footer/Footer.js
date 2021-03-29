import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>copyright @2021</p>
      <div className="social">
        <a href="https://www.facebook.com">
          <img
          className="logo-img"
          src="/img/Icon/facebook.png"
          alt="MoonFall"

        />
        </a>
        <a href="https://web.whatsapp.com">
          <img
            className="logo-img"
            src="/img/Icon/whatsapp.png"
            alt="MoonFall"

          />
        </a>
        <a href="https://twitter.com/?lang=pt">
          <img
          className="logo-img"
          src="/img/Icon/twitter.png"
          alt="MoonFall"

        />
        </a>

      </div>
    </div>
  );
}
