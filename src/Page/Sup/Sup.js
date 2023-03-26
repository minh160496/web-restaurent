import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Sup.module.scss";

const cl = classNames.bind(styles);
export default function Sup() {
  useEffect(() => {
    document.title = pathObj.sups.title;
  }, []);
  return (
    <div className={cl("sup")}>
      <List path={pathObj.sups.path} />
    </div>
  );
}
