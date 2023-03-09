import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import styles from "./OutStanding.module.scss";

const cl = classNames.bind(styles);
export default function OutStanding() {
  return (
    <div className={cl("out-standing")}>
      <List path="/outStanding" />
    </div>
  );
}
