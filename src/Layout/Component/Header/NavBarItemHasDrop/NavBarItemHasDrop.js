import React, { useState } from "react";
import PropTypes, { node } from "prop-types";
import classnames from "classnames/bind";

import { ReactComponent as IconDown } from "@/assets/icon/downFill.svg";
import { ReactComponent as IconUp } from "@/assets/icon/upFill.svg";

import styles from "./NavBarItemHasDrop.module.scss";

const cl = classnames.bind(styles);
export default function DropDown({
  name,
  // hasMouseOver = false,
  onMouseOver = () => {},
  onMouseOut = () => {},
}) {
  const [hasMouseOver, setMouseOver] = useState(false);
  return (
    <div
      className={cl("navbarHasDrop")}
      onMouseOver={() => {
        onMouseOver();
        setMouseOver(true);
      }}
      onMouseOut={() => {
        onMouseOut();
        setMouseOver(false);
      }}
    >
      <div className={cl("dropdown-1") + " flex align-center"}>
        <h3>{name}</h3>
        {!hasMouseOver && (
          <div className={cl("icon")}>
            <IconDown fill="currentcolor" width={15} height={15} />
          </div>
        )}
        {hasMouseOver && (
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
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};
