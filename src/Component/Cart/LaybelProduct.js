import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Cart.module.scss";

const cl = classNames.bind(styles);
export default function LaybelProduct({ perSales }) {
  return (
    <div className={cl("laybel")}>
      <span>{-perSales + "%"}</span>
    </div>
  );
}

LaybelProduct.propTypes = {
  perSales: PropTypes.number,
};
