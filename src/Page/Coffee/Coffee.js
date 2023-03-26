import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Coffee.module.scss";

const cl = classNames.bind(styles);
export default function Coffee() {
  useEffect(() => {
    document.title = pathObj.coffees.title;
  }, []);
  return (
    <div className={cl("coffees")}>
      <List path={pathObj.coffees.path} />
    </div>
  );
}
