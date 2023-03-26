import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { CART_NUM } from "CONST";
import { contextReRenderLayoutDefault } from "Layout/LayoutDefault";
import { contextReRenderLayoutNavBar } from "Layout/LayoutNavBar";

import styles from "./ChooseQuanlity.module.scss";

const cl = classNames.bind(styles);
export default function ChooseQuanlity({
  id,
  isToCart = true,
  up = () => {},
  down = () => {},
}) {
  const reRenderLayoutDefaultObj = useContext(contextReRenderLayoutDefault);
  const handleReRenderLayOutDefault = reRenderLayoutDefaultObj
    ? reRenderLayoutDefaultObj.func
    : () => {};
  const reRenderLayoutNavBarObj = useContext(contextReRenderLayoutNavBar);
  const handleReRenderLayoutNavBar = reRenderLayoutNavBarObj
    ? reRenderLayoutNavBarObj.func
    : () => {};

  const [cartNum, setCartNum] = useState({});

  useEffect(() => {
    const initJson = localStorage.getItem(CART_NUM);
    const init = initJson ? JSON.parse(initJson) : {};
    setCartNum(init);
  }, [reRenderLayoutDefaultObj, reRenderLayoutNavBarObj]);

  const handleClickDown = () => {
    const oldCartNumJson = localStorage.getItem(CART_NUM);
    const oldCartNum = oldCartNumJson ? JSON.parse(oldCartNumJson) : {};
    const valueOfNewCartNumChange =
      (oldCartNum[id] &&
        oldCartNum[id].value > 1 &&
        oldCartNum[id].value - 1) ||
      1;
    const newCartNum = {
      ...oldCartNum,
      [id]: {
        value: valueOfNewCartNumChange,
        isToCart,
      },
    };
    localStorage.setItem(CART_NUM, JSON.stringify(newCartNum));
    setCartNum(newCartNum);
    //render cả layout vì có cả logic bag hover
    handleReRenderLayOutDefault();
    handleReRenderLayoutNavBar();
    down();
  };

  const handleClickUp = () => {
    const oldCartNumJson = localStorage.getItem(CART_NUM);
    const oldCartNum = oldCartNumJson ? JSON.parse(oldCartNumJson) : {};
    const valueOfNewCartNumChange =
      (oldCartNum[id] && oldCartNum[id].value && oldCartNum[id].value + 1) || 1;
    const newCartNum = {
      ...oldCartNum,
      [id]: {
        value: valueOfNewCartNumChange,
        isToCart,
      },
    };
    localStorage.setItem(CART_NUM, JSON.stringify(newCartNum));
    setCartNum(newCartNum);
    //render cả layout vì có cả logic bag hover
    handleReRenderLayOutDefault();
    handleReRenderLayoutNavBar();
    up();
  };

  return (
    <div
      className={cl("choose-quanlity") + " flex align-center justify-between"}
    >
      <div className={cl("item")} onClick={handleClickDown}>
        -
      </div>
      <div className={cl("item", "item-num")}>
        {(cartNum[id] && cartNum[id].value) || 0}
      </div>
      <div className={cl("item")} onClick={handleClickUp}>
        +
      </div>
    </div>
  );
}

ChooseQuanlity.propTypes = {
  id: PropTypes.number,
  isToCart: PropTypes.bool,
  up: PropTypes.func,
  down: PropTypes.func,
};
