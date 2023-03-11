import React from "react";
import classNames from "classnames/bind";

import NavigatorItemWrapper from "./NavigatorItemWrapper";
import NavBarOnOfCanvas from "Component/NavBarOnOfCanvas";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function Menu() {
  return (
    <NavigatorItemWrapper filterName="Danh mục">
      <NavBarOnOfCanvas />
    </NavigatorItemWrapper>
  );
}
