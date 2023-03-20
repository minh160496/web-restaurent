import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./ProductSearch.module.scss";

const cl = classNames.bind(styles);
export default function ProductSearch() {
  return (
    <div className={cl("product-search")}>
      <List path={pathObj.productSearchs.path} />
    </div>
  );
}
