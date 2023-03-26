import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Rice.module.scss";

const cl = classNames.bind(styles);
export default function Rice() {
  useEffect(() => {
    document.title = pathObj.rices.title;
  }, []);
  return (
    <div className={cl("rice")}>
      <List path={pathObj.rices.path} />
    </div>
  );
}
