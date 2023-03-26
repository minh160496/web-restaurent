import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Drink.module.scss";

const cl = classNames.bind(styles);
export default function Drink() {
  useEffect(() => {
    document.title = pathObj.drinks.title;
  }, []);
  return (
    <div className={cl("drink")}>
      <List path={pathObj.drinks.path} />
    </div>
  );
}
