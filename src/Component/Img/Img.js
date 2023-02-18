import React from "react";
import img from "assets/img/default.png";

export default function Img({
  src,
  alt = "image",
  className,
  width = 20,
  heigh = 20,
  color = "#fff",
  onClick = () => {},
}) {
  const handleFix = () => {
    src = img;
  };
  return (
    <img
      className={className}
      style={{ width: width, height: heigh, color: color }}
      src={src}
      alt={alt}
      onError={handleFix}
      onClick={onClick}
    />
  );
}
