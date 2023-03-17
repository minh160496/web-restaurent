import React from "react";
import classNames from "classnames/bind";

import LayoutDefault from "Layout/LayoutDefault";
import MainShoppingCart from "./MainShoppingCart";

import { pathObj } from "Routers";

import styles from "./ShoppingCart.module.scss";

const cl = classNames.bind(styles);
export default function ShoppingCart() {
  return (
    <div className={cl("shopping-cart")}>
      <LayoutDefault path={pathObj.shoppingCart.path}>
        <section className={cl("main") + " " + "h-100 gradient-custom"}>
          <MainShoppingCart />
        </section>
      </LayoutDefault>
    </div>
  );
}
