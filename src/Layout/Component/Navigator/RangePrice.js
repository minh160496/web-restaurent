import React from "react";
import classNames from "classnames/bind";

import NavigatorItemWrapper from "./NavigatorItemWrapper";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function RangePrice() {
  const conditionsFilterPrice = [
    { top: 100 },
    { top: 200, end: 100 },
    { top: 500, end: 200 },
    { top: 1000, end: 500 },
    { end: 1000 },
  ];
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
