import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import NavigatorItemWrapper from "./NavigatorItemWrapper";

import { FILTER_FIEL, conditionsFilterSizes } from "CONST";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function SizeFilter({ onChangeFiel }) {
  const [inputChecks, setInputChecks] = useState([]);
  const [filterSizes, setFilterSizes] = useState(() => {
    let init = {};
    for (let i in conditionsFilterSizes) {
      init = { ...init, [conditionsFilterSizes[i].id]: false };
    }
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
      filterSizes: filterSizeArr.length > 0 ? filterSizeArr : undefined,
    };
    localStorage.setItem(FILTER_FIEL, JSON.stringify(filterFielNew));
    onChangeFiel();
  }, [inputChecks]);
  return (
    <NavigatorItemWrapper filterName="Kích cỡ">
      <ul>
        {conditionsFilterSizes.map((item, index) => (
          <li className="filter__item" key={index}>
            <div className="flex align-center">
              <div className={cl("check")}>
                <input
                  type="checkbox"
                  name="smell"
                  id={"smell-" + index}
                  checked={inputChecks.includes(index)}
                  onChange={() => handleChangeCheckBox(index)}
                />
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

SizeFilter.propTypes = {
  onChangeFiel: PropTypes.func,
};
