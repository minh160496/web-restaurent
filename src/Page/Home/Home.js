import LayoutDefault from "Layout/LayoutDefault";
import React from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import img from "assets/icon/search.svg";

const cl = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cl("home")}>
      <LayoutDefault>
        <h1></h1>
      </LayoutDefault>
    </div>
  );
}
