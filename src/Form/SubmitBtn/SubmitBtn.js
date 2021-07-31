import React from "react";

import "./SubmitBtn.css";
export default function SubmitBtn(props) {
  const { onClick } = props;
  return (
    <button className="form__submit-btn" onClick={onClick}>
      Submit
    </button>
  );
}
