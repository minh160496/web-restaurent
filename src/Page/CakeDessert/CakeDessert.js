import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./CakeDessert.module.scss";

const cl = classNames.bind(styles);
export default function CakeDessert() {
  return (
    <div className={cl("cake-dessert")}>
      <List path={pathObj.cakeDesserts.path} />
    </div>
  );
}
