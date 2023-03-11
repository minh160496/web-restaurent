import React from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import styles from "./Blogs.module.scss";

const cl = classNames.bind(styles);
export default function Blogs() {
  return (
    <div className={cl("blogs")} path="/blogs">
      <List isBlog={true} path="/blogs" />
    </div>
  );
}
