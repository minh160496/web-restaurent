import React from "react";
import classNames from "classnames/bind";

import { CART_NUM, USER_LOGIN } from "CONST";

import styles from "@/Layout/Component/Header/Bag/Bag.module.scss";

const cl = classNames.bind(styles);
export default function BagNumber() {
  const cartProductsJson = localStorage.getItem(CART_NUM);
  const cartProducts = cartProductsJson ? JSON.parse(cartProductsJson) : {};
  const countProductCarts = Object.keys(cartProducts)
    .filter((key) => cartProducts[key].isToCart)
    .reduce((acc, curr) => acc + Number(cartProducts[curr].value), 0);
  const isLogin = !!localStorage.getItem(USER_LOGIN);

  return (
    <>
      {isLogin && countProductCarts > 0 && (
        <div className={cl("bag-number") + " pos-absolute"}>
          <span className="number">{countProductCarts}</span>
        </div>
      )}
    </>
  );
}
