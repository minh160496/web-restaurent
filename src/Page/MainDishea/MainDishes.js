import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./MainDishes.module.scss";

const cl = classNames.bind(styles);
export default function MainDishes() {
  return (
    <div className={cl("main-dishes")}>
      <List path={pathObj.mainDishes.path} />
    </div>
  );
}
