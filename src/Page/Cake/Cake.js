import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Cake.module.scss";

const cl = classNames.bind(styles);
export default function Cake() {
  useEffect(() => {
    document.title = pathObj.cakes.title;
  }, []);
  return (
    <div className={cl("cakes")}>
      <List path={pathObj.cakes.path} />
    </div>
  );
}
