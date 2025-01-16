import React from "react";
import "./Button.css";

function Button({ text, className, svg, classNameText }) {
  return (
    <button className={className}>
      <span className="wave1"></span>
      <span className="wave2"></span>
      <span className="wave3"></span>
      <span className="wave4"></span>
      <span className="wave5"></span>
      <span className="wave6"></span>
      <span className="wave7"></span>
      <span className="wave8"></span>
      <span className={classNameText}>{text}</span>
    </button>
  );
}

export default Button;
