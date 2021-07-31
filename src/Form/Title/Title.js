import React from "react";
// assets
import titleImg from "../../Assets/title-img.png";
import "./Title.css";

export default function Title() {
  return (
    <div className="form__title">
      <img className="form__title__img" src={titleImg} alt="title-img" />
    </div>
  );
}
