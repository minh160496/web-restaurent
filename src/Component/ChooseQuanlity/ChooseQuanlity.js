import React, { useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { CART_NUM } from "CONST";

import styles from "./ChooseQuanlity.module.scss";

const cl = classNames.bind(styles);
export default function ChooseQuanlity({ id, up = () => {}, down = () => {} }) {
  const [cartNum, setCartNum] = useState(() => {
    const initJson = localStorage.getItem(CART_NUM);
    const init = initJson ? JSON.parse(initJson) : {};
    return init;
  });
  const handleClickDown = () => {
    const oldCartNumJson = localStorage.getItem(CART_NUM);
    const oldCartNum = oldCartNumJson ? JSON.parse(oldCartNumJson) : {};
    const newCartNum = {
      ...oldCartNum,
      [id]: oldCartNum[id] ? oldCartNum[id] - 1 : 0,
    };
    localStorage.setItem(CART_NUM, JSON.stringify(newCartNum));
    setCartNum(newCartNum);

    down();
  };

  const handleClickUp = () => {
    const oldCartNumJson = localStorage.getItem(CART_NUM);
    const oldCartNum = oldCartNumJson ? JSON.parse(oldCartNumJson) : {};
    const newCartNum = {
      ...oldCartNum,
      [id]: oldCartNum[id] ? oldCartNum[id] + 1 : 1,
    };
    localStorage.setItem(CART_NUM, JSON.stringify(newCartNum));
    setCartNum(newCartNum);

    up();
  };
  return (
    <div
      className={cl("choose-quanlity") + " flex align-center justify-between"}
    >
      <div className={cl("item")} onClick={handleClickUp}>
        +
      </div>
      <div className={cl("item", "item-num")}>{cartNum[id] || 0}</div>
      <div className={cl("item")} onClick={handleClickDown}>
        -
      </div>
    </div>
  );
}

ChooseQuanlity.propTypes = {
  id: PropTypes.number,
  up: PropTypes.func,
  down: PropTypes.func,
};
