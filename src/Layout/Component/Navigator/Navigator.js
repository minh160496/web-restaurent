import React, { useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Menu from "./Menu";
import FilterTotal from "./FilterTotal";
import RangePrice from "./RangePrice";
import Smells from "./Smell";
import SizeFilter from "./SizeFilter";
import Blogs from "./Blogs";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function Navigator({ isBlog }) {
  const [hasRenderTotal, setHasRederTotal] = useState(false);
  const handleRenderTotal = () => {
    setHasRederTotal((prev) => !prev);
  };
  return (
    <nav className={cl("navigator")}>
      <div className={cl("nav__item")}>
        <Menu />
      </div>
      {!isBlog && (
        <>
          <div className={cl("nav__item")}>
            <FilterTotal />
          </div>
          <div className={cl("nav__item", "item-price")}>
            <RangePrice onChangeFiel={handleRenderTotal} />
          </div>
          <div className={cl("nav__item", "item-smell")}>
            <Smells onChangeFiel={handleRenderTotal} />
          </div>
          <div className={cl("nav__item", "item-size")}>
            <SizeFilter onChangeFiel={handleRenderTotal} />
          </div>
        </>
      )}
      {isBlog && (
        <div className={cl("nav__item", "item__blogs")}>
          <Blogs />
        </div>
      )}
    </nav>
  );
}

Navigator.propTypes = {
  isBlog: PropTypes.bool,
};
