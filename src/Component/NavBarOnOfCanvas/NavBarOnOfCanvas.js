import React from "react";
import classNames from "classnames/bind";

import NavBarItemOfCanvas from "./NavBarItemOfCanvas";

import { listBodyItem } from "Layout/Component/Header/OffCanvas";

import styles from "./NavBarOnOfCanvas.module.scss";

const cl = classNames.bind(styles);
export default function NavBarOnOfCanvas() {
  return (
    <div className={cl("navbar-on-ofcanvas")}>
      <ul>
        {listBodyItem.map((item, index) => (
          <li key={index}>
            <NavBarItemOfCanvas navBarItemObj={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
