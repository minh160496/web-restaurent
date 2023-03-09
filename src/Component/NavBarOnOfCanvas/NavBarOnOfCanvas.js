import React from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

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
            <NavLink
              className={({ isActive }) =>
                isActive ? cl("active") : cl('"inactive"')
              }
              to={item.path}
            >
              <NavBarItemOfCanvas navBarItemObj={item} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
