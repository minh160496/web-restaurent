import React, { useEffect } from "react";
import classNames from "classnames/bind";

import { pathObj } from "Routers";

import List from "Component/List";

import styles from "./AllProducts.module.scss";

const cl = classNames.bind(styles);
export default function AllProducts() {
  useEffect(() => {
    document.title = pathObj.list.title;
  }, []);
  return (
    <div className={cl("list")}>
      <List />
    </div>
  );
}
