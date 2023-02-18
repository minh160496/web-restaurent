import React from "react";
import classNames from "classnames/bind";

import styles from "./MyButton.module.scss";

const cl = classNames.bind(styles);

export default function MyButton({
  sizeXL,
  sizeMD,
  transparent,
  children,
  onClick = () => {},
}) {
  return (
    <div
      className={cl("btn", {
        sizeXL: !!sizeXL,
        sizeMD: !!sizeMD,
        transparent: !!transparent,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
