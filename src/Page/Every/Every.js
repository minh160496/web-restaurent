import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Every.module.scss";

const cl = classNames.bind(styles);
export default function Every() {
  useEffect(() => {
    document.title = pathObj.every.title;
  }, []);
  return (
    <div className={cl("every")}>
      <List path={pathObj.every.path} />
    </div>
  );
}
