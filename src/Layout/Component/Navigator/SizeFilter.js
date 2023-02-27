import React from "react";
import classNames from "classnames/bind";

import NavigatorItemWrapper from "./NavigatorItemWrapper";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function SizeFilter() {
  const conditionsFilterSizes = [
    { id: 1, fiel: "Lớn" },
    { id: 2, fiel: "Vừa" },
    { id: 3, fiel: "Nhỏ" },
  ];
  return (
    <NavigatorItemWrapper filterName="Kích cỡ">
      <ul>
        {conditionsFilterSizes.map((item, index) => (
          <li className="filter__item" key={index}>
            <div className="flex align-center">
              <div className={cl("check")}>
                <input type="checkbox" name="smell" id={"smell-" + index} />
              </div>
              <label htmlFor={"smell-" + index}>
                <h4 className={cl("filter__item__name")}>
                  {item.fiel[0].toUpperCase() + item.fiel.substring(1)}
                </h4>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </NavigatorItemWrapper>
  );
}
