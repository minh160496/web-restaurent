import React, { useEffect } from "react";
import classNames from "classnames/bind";

import List from "Component/List";

import { pathObj } from "Routers";

import styles from "./Blogs.module.scss";

const cl = classNames.bind(styles);
export default function Blogs() {
  useEffect(() => {
    document.title = pathObj.blogs.title;
  }, []);
  return (
    <div className={cl("blogs")} path={pathObj.blogs.path}>
      <List isBlog={true} path={pathObj.blogs.path} />
    </div>
  );
}
