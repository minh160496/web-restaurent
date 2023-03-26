import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./RiceNoodle.module.scss";

const cl = classNames.bind(styles);
export default function RiceNoodle() {
  useEffect(() => {
    document.title = pathObj.riceNoodles.title;
  }, []);
  return (
    <div className={cl("rice-noodle")}>
      <List path={pathObj.riceNoodles.path} />
    </div>
  );
}
