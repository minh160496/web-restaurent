import React from "react";
import classNames from "classnames/bind";

import NavigatorItemWrapper from "./NavigatorItemWrapper";
import NavBarOnOfCanvas from "Component/NavOnBarOfCanvas";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function Menu() {
  return (
    <NavigatorItemWrapper filterName="Danh mục sản phẩm">
      <NavBarOnOfCanvas />
    </NavigatorItemWrapper>
  );
}
