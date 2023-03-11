import React, { useState } from "react";
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
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  const placeholderStyles = {
    width: width,
    minWidth: minWidth,
    heigh: heigh,
    backgroundColor: "transparent",
    borderRadius: 8,
    color: color,
  };

  const imgStyles = {
    width: width,
    minWidth: minWidth,
    height: heigh,
    objectFit: fit,
  };
  return (
    <div className={className} style={placeholderStyles}>
      <img
        style={imgStyles}
        src={src}
        alt={alt}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgErr(true)}
        onClick={onClick}
      />
    </div>
  );
}

Img.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  fit: PropTypes.string,
};
