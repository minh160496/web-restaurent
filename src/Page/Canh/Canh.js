import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Canh.module.scss";

const cl = classNames.bind(styles);
export default function Canh() {
  return (
    <div className={cl("canhs")}>
      <List path={pathObj.canhs.path} />
    </div>
  );
}
