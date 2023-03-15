import React, { useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { ReactComponent as IconPlus } from "@/assets/icon/plus.svg";
import { ReactComponent as IconMinus } from "@/assets/icon/minus.svg";

import styles from "./NavBarItemOfCanvas.module.scss";

const cl = classNames.bind(styles);
export default function NavBarItemOfCanvas({ navBarItemObj }) {
  const [childFade, setChildFade] = useState(false);
  const handleClickIcon = (e) => {
    e.preventDefault();
    setChildFade((prev) => !prev);
  };
  if (!navBarItemObj) return;
  return (
    <div>
      <div className={cl("navbar-item-ofcanvas")}>
        <div
          className={
            cl({ actived: childFade }, "hover-change-color") +
            " flex justify-between"
          }
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? cl("active", "nav-link") : cl("inactive", "nav-link")
            }
            to={navBarItemObj.path}
          >
            <h2 className={cl("item__title")}>{navBarItemObj.fiel}</h2>
          </NavLink>
          {navBarItemObj.child && (
            <div className={cl("item__icon")} onClick={handleClickIcon}>
              {!childFade && (
                <div className={cl("icon", "rotate-animation")}>
                  <IconPlus fill="currentcolor" />
                </div>
              )}
              {childFade && (
                <div className={cl("icon", "rotate-animation")}>
                  <IconMinus fill="currentcolor" />
                </div>
              )}
            </div>
          )}
        </div>
        {childFade && (
          <div className={cl("child")}>
            {navBarItemObj.child &&
              navBarItemObj.child.map((child) => (
                <NavBarItemOfCanvas navBarItemObj={child} key={child.id} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

NavBarItemOfCanvas.propTypes = {
  navBarItemObj: PropTypes.object,
};
