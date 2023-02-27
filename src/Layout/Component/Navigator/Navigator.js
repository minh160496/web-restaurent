import React from "react";
import classNames from "classnames/bind";

import Menu from "./Menu";
import FilterTotal from "./FilterTotal";
import RangePrice from "./RangePrice";
import Smells from "./Smell";
import SizeFilter from "./SizeFilter";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function Navigator() {
  return (
    <nav className={cl("navigator")}>
      <div className={cl("nav__item")}>
        <Menu />
      </div>
      <div className={cl("nav__item")}>
        <FilterTotal />
      </div>
      <div className={cl("nav__item", "item-price")}>
        <RangePrice />
      </div>
      <div className={cl("nav__item", "item-smell")}>
        <Smells />
      </div>
      <div className={cl("nav__item", "item-size")}>
        <SizeFilter />
      </div>
    </nav>
  );
}
