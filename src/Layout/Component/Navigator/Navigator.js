import React, { useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Menu from "./Menu";
import FilterTotal from "./FilterTotal";
import RangePrice from "./RangePrice";
import Smells from "./Smell";
import SizeFilter from "./SizeFilter";
import Blogs from "./Blogs";

import { FILTER_FIEL, FILTER_SIZES, FILTER_SMELLS, RANGE_PRICE } from "CONST";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function Navigator({ isBlog, onChangeFilterInNav = () => {} }) {
  const [hasRenderTotal, setHasRederTotal] = useState(false);
  const [isResetRangePrice, setIsResetRangePrice] = useState(false);
  const [isResetFilerSmells, setIsResetFilerSmells] = useState(false);
  const [isResetFilerSizes, setIsResetFilerSizes] = useState(false);
  const handleRenderTotal = () => {
    setHasRederTotal((prev) => !prev);
    onChangeFilterInNav();
  };

  const handleResetFilterFiel = (filterFiel) => {
    const filterFielOld = JSON.parse(localStorage.getItem(FILTER_FIEL));
    const filterFielNew = { ...filterFielOld, [filterFiel]: undefined };
    localStorage.setItem(FILTER_FIEL, JSON.stringify(filterFielNew));
    if (filterFiel === RANGE_PRICE) setIsResetRangePrice(true);
    if (filterFiel === FILTER_SMELLS) setIsResetFilerSmells(true);
    if (filterFiel === FILTER_SIZES) setIsResetFilerSizes(true);
  };
  const handleResetFilterFiels = () => {
    localStorage.setItem(FILTER_FIEL, JSON.stringify({}));
    setIsResetRangePrice(true);
    setIsResetFilerSmells(true);
    setIsResetFilerSizes(true);
    onChangeFilterInNav();
  };

  const handleSetIsResetFiel = (filterFiel, bool) => {
    if (filterFiel === FILTER_SIZES) setIsResetFilerSizes(bool);
    if (filterFiel === FILTER_SMELLS) setIsResetFilerSmells(bool);
    if (filterFiel === RANGE_PRICE) setIsResetRangePrice(bool);
  };

  return (
    <nav className={cl("navigator")}>
      <div className={cl("nav__item")}>
        <Menu />
      </div>
      {!isBlog && (
        <>
          <div className={cl("nav__item")}>
            <FilterTotal
              handleResetFilterFiel={handleResetFilterFiel}
              handleResetFilterFiels={handleResetFilterFiels}
            />
          </div>
          <div className={cl("nav__item", "item-price")}>
            <RangePrice
              onChangeFiel={handleRenderTotal}
              isReset={isResetRangePrice}
              handleSetIsResetFiel={handleSetIsResetFiel}
            />
          </div>
          <div className={cl("nav__item", "item-smell")}>
            <Smells
              onChangeFiel={handleRenderTotal}
              isReset={isResetFilerSmells}
              handleSetIsResetFiel={handleSetIsResetFiel}
            />
          </div>
          <div className={cl("nav__item", "item-size")}>
            <SizeFilter
              onChangeFiel={handleRenderTotal}
              isReset={isResetFilerSizes}
              handleSetIsResetFiel={handleSetIsResetFiel}
            />
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
  onChangeFilterInNav: PropTypes.func,
};
