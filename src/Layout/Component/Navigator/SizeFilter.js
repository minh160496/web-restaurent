import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import NavigatorItemWrapper from "./NavigatorItemWrapper";

import { FILTER_FIEL, conditionsFilterSizes, FILTER_SIZES } from "CONST";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function SizeFilter({
  isReset,
  onChangeFiel = () => {},
  handleSetIsResetFiel = () => {},
}) {
  let init = {};
  for (let i in conditionsFilterSizes) {
    init = { ...init, [conditionsFilterSizes[i].id]: false };
  }
  const [inputChecks, setInputChecks] = useState([]);
  const [filterSizes, setFilterSizes] = useState(() => {
    return init;
  });

  const handleChangeCheckBox = (index) => {
    setInputChecks((inputChecksPrev) => {
      if (inputChecksPrev.includes(index)) {
        const inputChecksNext = [
          ...inputChecksPrev.slice(0, inputChecksPrev.indexOf(index)),
          ...inputChecksPrev.slice(inputChecksPrev.indexOf(index) + 1),
        ];
        return inputChecksNext;
      }
      return [...inputChecksPrev, index];
    });

    setFilterSizes((filterSizesPrev) => {
      const filterSizesNext = {
        ...filterSizesPrev,
        [index + 1]: !filterSizesPrev[index + 1],
      };
      return filterSizesNext;
    });

    handleSetIsResetFiel(FILTER_SIZES, false);
  };

  useEffect(() => {
    const filterSizeArr = [];
    Object.keys(filterSizes).forEach((key) => {
      const conditionFiel = conditionsFilterSizes[Number(key) - 1].fiel;
      if (filterSizes[key]) {
        filterSizeArr.push(conditionFiel);
      }
    });

    const filterFielOld = JSON.parse(localStorage.getItem(FILTER_FIEL)) || {};
    const filterFielNew = {
      ...filterFielOld,
      [FILTER_SIZES]: filterSizeArr.length > 0 ? filterSizeArr : undefined,
    };
    localStorage.setItem(FILTER_FIEL, JSON.stringify(filterFielNew));
    onChangeFiel();
  }, [inputChecks]);

  useEffect(() => {
    if (isReset) {
      setInputChecks([]);
      setFilterSizes({ ...init });
    }
  }, [isReset]);

  return (
    <NavigatorItemWrapper filterName="Kích cỡ">
      <ul>
        {conditionsFilterSizes.map((item, index) => (
          <li className={cl("filter__item")} key={index}>
            <div className="flex align-center">
              <div className={cl("check")}>
                <input
                  type="checkbox"
                  name="size"
                  id={"size-" + index}
                  checked={inputChecks.includes(index)}
                  onChange={() => handleChangeCheckBox(index)}
                />
              </div>
              <label htmlFor={"size-" + index}>
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

SizeFilter.propTypes = {
  isReset: PropTypes.bool,
  onChangeFiel: PropTypes.func,
  handleSetIsResetFiel: PropTypes.func,
};
