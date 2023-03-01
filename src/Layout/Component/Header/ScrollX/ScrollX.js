import React from "react";
import classnames from "classnames/bind";
import PropTypes, { node } from "prop-types";

import { ReactComponent as IconArrowRight } from "src/assets/icon/arrowRight.svg";
import { ReactComponent as IconArrowLeft } from "src/assets/icon/arrowLeft.svg";

import styles from "./ScrollX.module.scss";

const cl = classnames.bind(styles);
export default function ScrollX({ onClickLeft, onClickRight }) {
  return (
    <div className={cl("navbar__item__arrow") + " flex pos-absolute"}>
      <div className={cl("arrow", "arrow-left", "icon")} onClick={onClickLeft}>
        <IconArrowLeft fill="currentcolor" width={20} height={20} />
      </div>
      <div
        className={cl("arrow", "arrow-right", "icon")}
        onClick={onClickRight}
      >
        <IconArrowRight fill="currentcolor" with={20} heigh={20} />
      </div>
    </div>
  );
}

ScrollX.propTypes = {
  onClickLeft: PropTypes.func,
  onClickRight: PropTypes.func,
};
