import React from "react";
import classNames from "classnames/bind";

import NavigatorItemWrapper from "./NavigatorItemWrapper";
import { ReactComponent as IconClose } from "@/assets/icon/close.svg";

import { FILTER_FIEL } from "CONST";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function FilterTotal() {
  const filterFiels = JSON.parse(localStorage.getItem(FILTER_FIEL));
  const isFilterFiels = Object.keys(filterFiels).length > 0;

  return (
    <>
      {isFilterFiels && (
        <NavigatorItemWrapper filterName="Bạn chọn">
          <div className={cl("filter-total-close") + " flex align-center"}>
            <div className={cl("close__title")}>
              <span>Bỏ hết</span>
            </div>
            <div className={cl("icon")}>
              <IconClose fill="currentcolor" width={15} height={15} />
            </div>
          </div>
          <ul>
            {Object.keys(filterFiels).map((filterFiel, index) => (
              <li
                className={
                  cl("filter__item", "item-filter-total") + " flex align-center"
                }
                key={index}
              >
                <div className={cl("icon", "icon-thin")}>
                  <IconClose fill="currentcolor" width={15} height={15} />
                </div>
                <div className={cl("item__fiel")}>
                  <span>Từ 100.000</span>
                </div>
              </li>
            ))}
          </ul>
        </NavigatorItemWrapper>
      )}
    </>
  );
}
