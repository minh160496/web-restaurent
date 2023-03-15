import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Beef.module.scss";

const cl = classNames.bind(styles);
export default function Beef() {
  return (
    <div className={cl("salads")}>
      <List path={pathObj.beefs.path} />
    </div>
  );
}
