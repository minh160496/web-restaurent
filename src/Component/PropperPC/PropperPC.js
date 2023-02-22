import React, { useState } from "react";
import classnames from "classnames/bind";
import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";

import styles from "./PropperPC.module.scss";

const cl = classnames.bind(styles);
export default function PropperPC({
  content,
  children,
  visible = true,
  mouseOver,
  isMobileHidden,
  onClickOutSide = () => {},
}) {
  const [hasMouseOver, setHasMouseOver] = useState(false);
  const handleShowPropper = () => {
    setHasMouseOver(true);
  };
  const handleHiddenPropper = () => {
    setHasMouseOver(false);
  };

  return (
    <div
      className={cl("tippy-PC", {
        hiddenOnMobile: isMobileHidden ? true : false,
      })}
      onMouseOver={mouseOver ? handleShowPropper : () => {}}
      onMouseLeave={mouseOver ? handleHiddenPropper : () => {}}
    >
      <Tippy
        visible={mouseOver ? hasMouseOver : visible}
        placement="top-end"
        interactive //cho phép select nội dung bên trong
        content={content}
        arrow={false}
        theme="light"
        offset={[10, 20]}
        onClickOutside={onClickOutSide}
      >
        <div className={cl("propper-PC-wrapper")}>{children}</div>
      </Tippy>
    </div>
  );
}

PropperPC.propTypes = {
  content: PropTypes.node,
  children: PropTypes.node,
  visible: PropTypes.bool,
  mouseOver: PropTypes.bool,
  isMobileHidden: PropTypes.bool,
  onClickOutSide: PropTypes.func,
};
