import React from "react";
import PropTypes from "prop-types";

import img from "assets/img/default.png";

export default function Img({
  src = "https://bizweb.dktcdn.net/thumb/large/100/469/097/products/17ad3f36d9db047aa93f83dc10abc6.jpg?v=1667882482000",
  alt = "image",
  className,
  width = 20,
  minWidth = "auto",
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
      style={{
        width: width,
        minWidth: minWidth,
        height: heigh,
        color: color,
        objectFit: fit,
      }}
      src={src}
      alt={alt}
      onError={handleFix}
      onClick={onClick}
    />
  );
}

Img.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  fit: PropTypes.string,
};
