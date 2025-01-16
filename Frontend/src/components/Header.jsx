import React from "react";
import "./Header.css";
import Icon from "./Icon";
import Button from "./Button";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="Logo">
          <Icon name="logo" width={200} height={70} />
        </div>

        <div className="Buttons">
          <Button
            text={"Отзывы"}
            className={"Button"}
            classNameText={"ButtonText"}
          />
          <Button
            text={"О нас"}
            className={"Button"}
            classNameText={"ButtonText"}
          />
          <Button
            text={"Контакты"}
            className={"Button"}
            classNameText={"ButtonText"}
          />
          <Button
            text={"Корзина"}
            className={"Button"}
            classNameText={"ButtonText"}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
