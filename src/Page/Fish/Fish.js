import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Fish.module.scss";

const cl = classNames.bind(styles);
export default function Fish() {
  useEffect(() => {
    document.title = pathObj.fishs.title;
  }, []);
  return (
    <div className={cl("fish")}>
      <List path={pathObj.fishs.path} />
    </div>
  );
}
