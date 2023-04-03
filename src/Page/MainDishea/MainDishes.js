import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./MainDishes.module.scss";

const cl = classNames.bind(styles);
export default function MainDishes() {
  useEffect(() => {
    document.title = pathObj.mainDishes.title;
  }, []);
  return (
    <div className={cl("main-dishes")}>
      <List path={pathObj.mainDishes.path} />
    </div>
  );
}
