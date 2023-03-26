import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./CakeDessert.module.scss";

const cl = classNames.bind(styles);
export default function CakeDessert() {
  useEffect(() => {
    document.title = pathObj.cakeDesserts.title;
  }, []);
  return (
    <div className={cl("cake-dessert")}>
      <List path={pathObj.cakeDesserts.path} />
    </div>
  );
}
