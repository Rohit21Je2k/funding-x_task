import React from "react";
import google from "../Assets/google.svg";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__warning">
        Never submit passwords through Google Forms.
      </p>
      <p className="footer__disclaimer">
        This content is neither created nor endorsed by Google.
      </p>
      <div className="footer__links">
        <a href="/" className="footer__link">
          Report Abuse
        </a>
        <a href="/" className="footer__link">
          Terms of Service
        </a>
        <a href="/" className="footer__link">
          Privacy Policy
        </a>
      </div>
      <div className="footer__product-name">
        <img
          className="footer__product-name__img"
          src={google}
          alt="google-img"
        />
        <p className="footer__product-name__text">Forms</p>
      </div>
    </div>
  );
}
