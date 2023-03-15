import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Drink.module.scss";

const cl = classNames.bind(styles);
export default function Drink() {
  return (
    <div className={cl("drink")}>
      <List path={pathObj.drinks.path} />
    </div>
  );
}
