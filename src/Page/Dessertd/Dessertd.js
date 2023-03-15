import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Dessertd.module.scss";

const cl = classNames.bind(styles);
export default function Dessertd() {
  return (
    <div className={cl("dessertd")}>
      <List path={pathObj.dessertds.path} />
    </div>
  );
}
