import React from "react";
import { ReactComponent as IconLogo } from "../media/svg/logo.svg";
import { ReactComponent as IconBath } from "../media/svg/bath.svg";
import { ReactComponent as IconHeater } from "../media/svg/heater.svg";
import { ReactComponent as IconMirror } from "../media/svg/mirror.svg";
import { ReactComponent as IconShower } from "../media/svg/shower.svg";
import { ReactComponent as IconSink } from "../media/svg/sink.svg";
import { ReactComponent as IconToilet } from "../media/svg/toilet.svg";

function Icon({
  name,
  className = "",
  width = 50,
  height = 50,
  fill = "currentColor",
}) {
  if (name === "logo") {
    return (
      <IconLogo
        className={className}
        width={width}
        height={height}
        fill={fill}
      />
    );
  }
  if (name === "bath") {
    return (
      <IconBath
        className={className}
        width={width}
        height={height}
        fill={fill}
      />
    );
  }
  if (name === "heater") {
    return (
      <IconHeater
        className={className}
        width={width}
        height={height}
        fill={fill}
      />
    );
  }
  if (name === "mirror") {
    return (
      <IconMirror
        className={className}
        width={width}
        height={height}
        fill={fill}
      />
    );
  }
  if (name === "shower") {
    return (
      <IconShower
        className={className}
        width={width}
        height={height}
        fill={fill}
      />
    );
  }
  if (name === "sink") {
    return (
      <IconSink
        className={className}
        width={width}
        height={height}
        fill={fill}
      />
    );
  }
  if (name === "toilet") {
    return (
      <IconToilet
        className={className}
        width={width}
        height={height}
        fill={fill}
      />
    );
  }

  return null; // Возвращает null, если иконка не найдена
}

export default Icon;
