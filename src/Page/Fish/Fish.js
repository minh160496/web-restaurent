import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Fish.module.scss";

const cl = classNames.bind(styles);
export default function Fish() {
  return (
    <div className={cl("fish")}>
      <List path={pathObj.fishs.path} />
    </div>
  );
}
