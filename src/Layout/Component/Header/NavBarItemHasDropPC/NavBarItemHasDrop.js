import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";

import { ReactComponent as IconDown } from "@/assets/icon/downFill.svg";
import { ReactComponent as IconUp } from "@/assets/icon/upFill.svg";

import styles from "./NavBarItemHasDrop.module.scss";

const cl = classnames.bind(styles);
export default function DropDown({ name, hasMouseOverDrop }) {
  return (
    <div className={cl("navbarHasDrop")}>
      <div
        className={
          cl("dropdown-1", {
            hovering: hasMouseOverDrop,
          }) + " flex align-center"
        }
      >
        <h3>{name}</h3>
        {!hasMouseOverDrop && (
          <div className={cl("icon")}>
            <IconDown fill="currentcolor" width={15} height={15} />
          </div>
        )}
        {hasMouseOverDrop && (
          <div className={cl("icon")}>
            <IconUp fill="currentcolor" width={15} height={15} />
          </div>
        )}
      </div>
    </div>
  );
}

DropDown.propTypes = {
  name: PropTypes.string,
  hasMouseOver: PropTypes.bool,
};
