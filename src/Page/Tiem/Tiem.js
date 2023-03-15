import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Tiem.module.scss";

const cl = classNames.bind(styles);
export default function Tiem() {
  return (
    <div className={cl("tiem")}>
      <List path={pathObj.tiems.path} />
    </div>
  );
}
