import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Salad.module.scss";

const cl = classNames.bind(styles);
export default function Salad() {
  useEffect(() => {
    document.title = pathObj.salads.title;
  }, []);
  return (
    <div className={cl("salad")}>
      <List path={pathObj.salads.path} />
    </div>
  );
}
