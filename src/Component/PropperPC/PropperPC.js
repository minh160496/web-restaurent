import React, { useRef, useState } from "react";
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
  dropDown = false,
  theme = "light",
  onClickOutSide = () => {},
}) {
  const timeOutShow = useRef(null);
  const timeOutHidden = useRef(null);
  const [hasMouseOver, setHasMouseOver] = useState(false);

  const handleShowPropper = () => {
    window.clearTimeout(timeOutHidden.current);
    //xủ lý delay thời gian ẩn, hiện proper để ngừời dùng đẽ dang thao tác
    timeOutShow.current = setTimeout(() => {
      setHasMouseOver(true);
    }, 300);
  };
  const handleHiddenPropper = () => {
    window.clearTimeout(timeOutShow);
    //xủ lý delay thời gian ẩn, hiện proper để ngừời dùng đẽ dang thao tác
    timeOutHidden.current = setTimeout(() => {
      setHasMouseOver(false);
    }, 300);
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
        placement={!dropDown ? "top-end" : "auto"}
        interactive //cho phép select nội dung bên trong
        content={content}
        arrow={false}
        theme={theme}
        offset={!dropDown ? [10, 20] : [0, 0]}
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
  dropDown: PropTypes.bool,
  theme: PropTypes.string,
  onClickOutSide: PropTypes.func,
};
