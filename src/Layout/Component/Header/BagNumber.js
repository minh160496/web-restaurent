import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cl = classNames.bind(styles);
export default function BagNumber({ number }) {
  return (
    <div className={cl("bag-number") + " pos-absolute"}>
      <span className="number">{number}</span>
    </div>
  );
}
