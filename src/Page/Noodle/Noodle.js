import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Noodle.module.scss";

const cl = classNames.bind(styles);
export default function Noodle() {
  useEffect(() => {
    document.title = pathObj.noodles.title;
  }, []);
  return (
    <div className={cl("noodle")}>
      <List path={pathObj.noodles.path} />
    </div>
  );
}
