import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import MyButton from "Component/MyButton";
import { ReactComponent as IconClose } from "assets/icon/close.svg";
import { CART_NUM } from "CONST";
import { contextReRenderShoppingCart } from "Component/ShoppingCart/ShoppingCart";

import styles from "./DelProduct.module.scss";

const cl = classNames.bind(styles);
export default function DelProduct({ id, isMini }) {
  const reReRenderShoppingCart = useContext(contextReRenderShoppingCart);
  const handleDeletedProducts = () => {
    const cartNumJson = localStorage.getItem(CART_NUM);
    const cartNumObj = cartNumJson ? JSON.parse(cartNumJson) : {};
    const newCartNumObj = { ...cartNumObj, [id]: 0 };
    localStorage.setItem(CART_NUM, JSON.stringify(newCartNumObj));
    if (typeof reReRenderShoppingCart === "function") {
      reReRenderShoppingCart();
    }
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
