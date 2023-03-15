import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Appetizer.module.scss";

const cl = classNames.bind(styles);
export default function Appetizer() {
  return (
    <div className={cl("appetizer")}>
      <List path={pathObj.appetizers.path} />
    </div>
  );
}
