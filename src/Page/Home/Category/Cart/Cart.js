import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Img from "Component/Img";

import styles from "./Cart.module.scss";

const cl = classNames.bind(styles);
export default function Cart({ data }) {
  return (
    <Link to="/">
      <div className={cl("cart")}>
        <div className={cl("cart-wrapper")}>
          <div className={cl("cart__img")}>
            <Img src={data.thumbail__src} width="100%" heigh="auto" />
          </div>
          <div className={cl("cart__type")}>
            <h3>{data.title}</h3>
          </div>
          <div className={cl("cart__desc")}>
            <span>{data.desc}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

Cart.propTypes = {
  data: PropTypes.object,
};
