import React from "react";
import classNames from "classnames/bind";

import styles from "./Loading.module.scss";

const cl = classNames.bind(styles);
export default function Loading({ theme }) {
  return <div className={cl("lds-dual-ring", { theme: !!theme })}></div>;
}
