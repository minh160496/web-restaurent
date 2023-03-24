import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./MyButton.module.scss";
import { Link } from "react-router-dom";

const cl = classNames.bind(styles);

export default function MyButton({
  sizeXL,
  sizeMD,
  transparent,
  className = "",
  floatLeft,
  children,
  link = "",
  type = "",
  onClick = () => {},
}) {
  return (
    <>
      {!link && (
        <button
          type={type}
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
        </button>
      )}

      {link && (
        <div onClick={onClick}>
          <Link
            to={link}
            className={
              cl("btn", "link", {
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
          </Link>
        </div>
      )}
    </>
  );
}

MyButton.propTypes = {
  sizeXL: PropTypes.bool,
  sizeMD: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string,
  floatLeft: PropTypes.bool,
  type: PropTypes.string,
  onclick: PropTypes.func,
};
