import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./MilkTea.module.scss";

const cl = classNames.bind(styles);
export default function MilkTea() {
  useEffect(() => {
    document.title = pathObj.milkTeas.title;
  }, []);
  return (
    <div className={cl("milk-tea")}>
      <List path={pathObj.milkTeas.path} />
    </div>
  );
}
