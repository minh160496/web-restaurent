import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Porridge.module.scss";

const cl = classNames.bind(styles);
export default function Porridge() {
  return (
    <div className={cl("porridge")}>
      <List path={pathObj.porridges.path} />
    </div>
  );
}
