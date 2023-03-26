import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Goi.module.scss";

const cl = classNames.bind(styles);
export default function Goi() {
  useEffect(() => {
    document.title = pathObj.gois.title;
  }, []);
  return (
    <div className={cl("goi")}>
      <List path={pathObj.gois.path} />
    </div>
  );
}
