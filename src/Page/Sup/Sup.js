import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Sup.module.scss";

const cl = classNames.bind(styles);
export default function Sup() {
  return (
    <div className={cl("sup")}>
      <List path={pathObj.sups.path} />
    </div>
  );
}
