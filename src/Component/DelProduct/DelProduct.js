import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import MyButton from "Component/MyButton";
import { ReactComponent as IconClose } from "assets/icon/close.svg";

import { CART_NUM } from "CONST";
import { contextReRenderLayoutDefault } from "Layout/LayoutDefault";
import { contextReRenderLayoutNavBar } from "Layout/LayoutNavBar";

import styles from "./DelProduct.module.scss";

const cl = classNames.bind(styles);
export default function DelProduct({ id, isMini }) {
  const reRenderLayoutDefaultObj = useContext(contextReRenderLayoutDefault);
  const handleReRenderLayOutDefault = reRenderLayoutDefaultObj
    ? reRenderLayoutDefaultObj.func
    : () => {};
  const reRenderLayoutNavBarObj = useContext(contextReRenderLayoutNavBar);
  const handleReRenderLayoutNavBar = reRenderLayoutNavBarObj
    ? reRenderLayoutNavBarObj.func
    : () => {};
  const handleDeletedProducts = () => {
    const cartNumJson = localStorage.getItem(CART_NUM);
    const cartNumObj = cartNumJson ? JSON.parse(cartNumJson) : {};
    const newCartNumObj = {
      ...cartNumObj,
      [id]: { ...cartNumObj[id], isToCart: false },
    };
    localStorage.setItem(CART_NUM, JSON.stringify(newCartNumObj));
    handleReRenderLayOutDefault();
    handleReRenderLayoutNavBar();
  };

  return (
    <MyButton
      className={cl("btn-x", { mini: isMini })}
      onClick={handleDeletedProducts}
    >
      <IconClose fill="currentcolor" width={20} height={20} />
    </MyButton>
  );
}

DelProduct.propTypes = {
  id: PropTypes.number,
  isMini: PropTypes.bool,
};
