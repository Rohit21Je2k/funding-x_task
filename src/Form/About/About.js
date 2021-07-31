import React from "react";

import "./About.css";

export default function About(props) {
  const { children } = props;
  return <div className="form__about">{children}</div>;
}
