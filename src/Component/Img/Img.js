import React from "react";
import img from "assets/img/default.png";

export default function Img({
  src = "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/1bb2a25291b5542968dba015b4be31.jpg?v=1667882207000",
  alt = "image",
  className,
  width = 20,
  heigh = 20,
  color = "#fff",
  fit = "cover",
  onClick = () => {},
}) {
  const handleFix = () => {
    src = img;
  };
  return (
    <img
      className={className}
      style={{ width: width, height: heigh, color: color, objectFit: fit }}
      src={src}
      alt={alt}
      onError={handleFix}
      onClick={onClick}
    />
  );
}
