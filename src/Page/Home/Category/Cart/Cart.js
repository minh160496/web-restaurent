import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";

import Img from "Component/Img";

import styles from "./Cart.module.scss";

const cl = classNames.bind(styles);
export default function Cart({ data }) {
  return (
    <Link to="/">
      <div className={cl("cart")}>
        <div className={cl("cart-wrapper")}>
          <div className={cl("cart__img")}>
            <Img
              src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_2.jpg?1677815721948"
              width="100%"
              heigh="auto"
            />
          </div>
          <div className={cl("cart__type")}>
            <h3>Món bò</h3>
          </div>
          <div className={cl("cart__desc")}>
            <span>Các món bò được chế biến rất ngon</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
