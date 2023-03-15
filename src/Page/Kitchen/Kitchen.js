import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Kitchen.module.scss";

const cl = classNames.bind(styles);
export default function Kitchen() {
  return (
    <div className={cl("salads")}>
      <List path={pathObj.kitchens.path} />
    </div>
  );
}
