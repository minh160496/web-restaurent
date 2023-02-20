import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./MyButton.module.scss";

const cl = classNames.bind(styles);

export default function MyButton({
  sizeXL,
  sizeMD,
  transparent,
  floatLeft,
  children,
  onClick = () => {},
}) {
  return (
    <div
      className={cl("btn", {
        sizeXL: !!sizeXL,
        sizeMD: !!sizeMD,
        transparent: !!transparent,
        floatLeft: !!floatLeft,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

MyButton.propTypes = {
  children: PropTypes.node,
  onclick: PropTypes.func,
};
