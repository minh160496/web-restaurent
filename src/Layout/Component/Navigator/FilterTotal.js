import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import NavigatorItemWrapper from "./NavigatorItemWrapper";
import { ReactComponent as IconClose } from "@/assets/icon/close.svg";

import {
  conditionsFilterSizes,
  conditionsFilterSmells,
  FILTER_FIEL,
  FILTER_SIZES,
  FILTER_SMELLS,
  RANGE_PRICE,
} from "CONST";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function FilterTotal({
  handleResetFilterFiel = () => {},
  handleResetFilterFiels = () => {},
}) {
  const filterFiels = JSON.parse(localStorage.getItem(FILTER_FIEL));
  const isFilterFiels = Object.keys(filterFiels).length > 0;

  const ContentTotal = (filterFiel, index) => {
    if (filterFiel === RANGE_PRICE) {
      if (filterFiels[filterFiel].top && filterFiels[filterFiel].end) {
        return `Giá: Từ ${filterFiels[filterFiel].end + ".000"} - ${
          filterFiels[filterFiel].top + ".000"
        }`;
      }
      if (filterFiels[filterFiel].top && !filterFiels[filterFiel].end) {
        return `Giá: Dưới ${filterFiels[filterFiel].top + ".000"}`;
      }
      if (!filterFiels[filterFiel].top && filterFiels[filterFiel].end) {
        return `Giá: Trên ${filterFiels[filterFiel].end + ".000"}`;
      }
    }

    if (filterFiel === FILTER_SMELLS) {
      let content = "Vị: ";
      if (filterFiels[filterFiel].length === conditionsFilterSmells.length)
        return content + "Tất cả";
      filterFiels[filterFiel].forEach((item, index) => {
        let subContent = "";
        if (index < filterFiels[filterFiel].length - 1) {
          subContent = ", ";
        }
        const itemRender = item[0].toUpperCase() + item.slice(1);
        content += itemRender + subContent;
      });
      return content;
    }

    if (filterFiel === FILTER_SIZES) {
      let content = "Kích cỡ: ";
      if (filterFiels[filterFiel].length === conditionsFilterSizes.length)
        return content + "Tất cả";
      filterFiels[filterFiel].forEach((item, index) => {
        let subContent = "";
        if (index < filterFiels[filterFiel].length - 1) {
          subContent = ", ";
        }
        const itemRender = item[0].toUpperCase() + item.slice(1);
        content += itemRender + subContent;
      });
      return content;
    }
  };

  return (
    <>
      {isFilterFiels && (
        <NavigatorItemWrapper filterName="Bạn chọn">
          <div
            className={cl("filter-total-close") + " flex align-center"}
            onClick={() => handleResetFilterFiels()}
          >
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
                <div
                  className={cl("icon", "icon-thin")}
                  onClick={() => handleResetFilterFiel(filterFiel)}
                >
                  <IconClose fill="currentcolor" width={15} height={15} />
                </div>
                <div className={cl("item__fiel")}>
                  <span>{ContentTotal(filterFiel, index)}</span>
                </div>
              </li>
            ))}
          </ul>
        </NavigatorItemWrapper>
      )}
    </>
  );
}

FilterTotal.propTypes = {
  handleResetFilterFiel: PropTypes.func,
  handleResetFilterFiels: PropTypes.func,
};
