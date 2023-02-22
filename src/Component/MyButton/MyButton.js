import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./MyButton.module.scss";

const cl = classNames.bind(styles);

export default function MyButton({
  sizeXL,
  sizeMD,
  transparent,
  className = "",
  floatLeft,
  children,
  onClick = () => {},
}) {
  return (
    <div
      className={
        cl("btn", {
          sizeXL: !!sizeXL,
          sizeMD: !!sizeMD,
          transparent: !!transparent,
          floatLeft: !!floatLeft,
        }) +
        " " +
        className
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
}

MyButton.propTypes = {
  sizeXL: PropTypes.bool,
  sizeMD: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  floatLeft: PropTypes.bool,
  onclick: PropTypes.func,
};
