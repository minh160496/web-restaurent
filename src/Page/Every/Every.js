import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import styles from "./Every.module.scss";

const cl = classNames.bind(styles);
export default function Every() {
  return (
    <div className={cl("every")}>
      <List path="/every" />
    </div>
  );
}
