import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Pork.module.scss";

const cl = classNames.bind(styles);
export default function Kitchen() {
  useEffect(() => {
    document.title = pathObj.porks.title;
  }, []);
  return (
    <div className={cl("pork")}>
      <List path={pathObj.porks.path} />
    </div>
  );
}
