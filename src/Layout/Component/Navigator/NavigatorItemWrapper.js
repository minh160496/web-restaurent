import React from "react";
import classnames from "classnames/bind";

import styles from "./Navigator.module.scss";

const cl = classnames.bind(styles);
export default function NavigatorItemWrapper({ filterName, children }) {
  return (
    <div className={cl("navigator__item-wrapper")}>
      <div className={cl("item__title")}>
        <h3>{filterName}</h3>
      </div>
      <div className={cl("item__body")}>{children}</div>
    </div>
  );
}
