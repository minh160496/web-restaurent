import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import styles from "./AllProducts.module.scss";

const cl = classNames.bind(styles);
export default function AllProducts() {
  return (
    <div className={cl("list")}>
      <List />
    </div>
  );
}
