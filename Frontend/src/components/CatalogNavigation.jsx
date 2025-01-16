import React from "react";
import "./shop.css";
import Icon from "./Icon";

function CatNav({ text, className, svg, classNameText }) {
  return (
    <>
      <div className={className}>
        <Icon name={"bath"} />
        <Icon name={"sink"} />
        <Icon name={"toilet"} />
        <Icon name={"shower"} />
        <Icon name={"heater"} />
        <Icon name={"mirror"} />
      </div>
    </>
  );
}

export default CatNav;
