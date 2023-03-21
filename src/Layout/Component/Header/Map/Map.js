import React from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import Toolip from "Component/Toolip";
import { ReactComponent as IconMap } from "assets/icon/map.svg";

import { pathObj } from "Routers";

import styles from "./Map.module.scss";

const cl = classNames.bind(styles);
export default function Map() {
  return (
    <Toolip content="Hệ thống cửa hàng">
      <div className={cl("map", "header__navbar__item")}>
        <NavLink
          className={({ isActive }) =>
            isActive ? cl("active") : cl('"inactive"')
          }
          to={pathObj.system.path}
        >
          <div className={cl("icon")}>
            <IconMap fill="currentcolor" width={20} height={20} />
          </div>
        </NavLink>
      </div>
    </Toolip>
  );
}
