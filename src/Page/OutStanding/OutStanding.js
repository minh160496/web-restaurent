import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./OutStanding.module.scss";

const cl = classNames.bind(styles);
export default function OutStanding() {
  useEffect(() => {
    document.title = pathObj.outStanding.title;
  }, []);
  return (
    <div className={cl("out-standing")}>
      <List path={pathObj.outStanding.path} />
    </div>
  );
}
