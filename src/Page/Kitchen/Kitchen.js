import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Kitchen.module.scss";

const cl = classNames.bind(styles);
export default function Kitchen() {
  useEffect(() => {
    document.title = pathObj.kitchens.title;
  }, []);
  return (
    <div className={cl("salads")}>
      <List path={pathObj.kitchens.path} />
    </div>
  );
}
