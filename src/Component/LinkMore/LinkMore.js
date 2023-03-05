import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./LinkMore.module.scss";

const cl = classnames.bind(styles);
export default function LinkMore() {
  return (
    <div className={cl("link")}>
      <Link to="/" className={cl("link-text")}>
        <span>Xem thêm</span>
      </Link>
    </div>
  );
}
