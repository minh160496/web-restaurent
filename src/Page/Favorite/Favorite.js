import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Favorite.module.scss";

const cl = classNames.bind(styles);
export default function Favorite() {
  return (
    <div className={cl("favorite")}>
      <List path={pathObj.favorites.path} />
    </div>
  );
}
