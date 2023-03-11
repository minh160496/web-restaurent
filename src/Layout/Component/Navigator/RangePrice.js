import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import NavigatorItemWrapper from "./NavigatorItemWrapper";

import { FILTER_FIEL, conditionsFilterPrice } from "CONST";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function RangePrice({ onChangeFiel }) {
  const [inputCheck, setInputCheck] = useState(undefined);
  const [filterRangePrice, setFilterRangePrice] = useState(undefined);

  const handleChangeRadio = (index) => {
    setInputCheck(index);
    setFilterRangePrice(conditionsFilterPrice[index]);
  };

  useEffect(() => {
    const filterFielOld = localStorage.getItem(FILTER_FIEL)
      ? JSON.parse(localStorage.getItem(FILTER_FIEL))
      : {};

    const filterFielNew = { ...filterFielOld, rangePrice: filterRangePrice };
    localStorage.setItem(FILTER_FIEL, JSON.stringify(filterFielNew));
    onChangeFiel();
  }, [inputCheck]);
  return (
    <NavigatorItemWrapper filterName="Mức giá">
      <ul>
        {conditionsFilterPrice.map((item, index) => (
          <li className="filter__item" key={index}>
            <div className="flex align-center">
              <div className={cl("check")}>
                <input
                  type="radio"
                  name="range-price"
                  id={"range-price-" + index}
                  checked={index === inputCheck}
                  onChange={() => handleChangeRadio(index)}
                />
              </div>
              <label htmlFor={"range-price-" + index}>
                <h4 className={cl("filter__item__name")}>
                  {(!item.end && "Dưới " + item.top) ||
                    (!item.top && "Trên " + item.end) ||
                    "Từ " + item.end + " - " + item.top}
                </h4>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </NavigatorItemWrapper>
  );
}

RangePrice.propTypes = {
  onChangeFiel: PropTypes.func,
};
