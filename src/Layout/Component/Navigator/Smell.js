import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import NavigatorItemWrapper from "./NavigatorItemWrapper";

import { FILTER_FIEL, conditionsFilterSmells } from "CONST";

import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);
export default function Smells({ onChangeFiel }) {
  const [inputChecks, setInputChecks] = useState([]);

  const [filterSmells, setFilterSmells] = useState(() => {
    let init = {};
    for (let i in conditionsFilterSmells) {
      init = { ...init, [conditionsFilterSmells[i].id]: false };
    }
    return init;
  });

  const handleChangeCheckBox = (index) => {
    setInputChecks((prev) => {
      if (prev.includes(index)) {
        const next = [
          ...prev.slice(0, prev.indexOf(index)),
          ...prev.slice(prev.indexOf(index) + 1),
        ];
        return next;
      }
      return [...prev, index];
    });
    setFilterSmells((prev) => {
      return { ...prev, [index + 1]: !prev[index + 1] };
    });
  };

  useEffect(() => {
    const filterSmellArr = [];
    Object.keys(filterSmells).forEach((key) => {
      const filterSmellItem = conditionsFilterSmells[Number(key) - 1];
      if (filterSmells[key]) {
        filterSmellArr.push(filterSmellItem.fiel);
      }
    });

    const filterFielOld = JSON.parse(localStorage.getItem(FILTER_FIEL)) || {};
    const filterFielNew = Object.assign(filterFielOld, {
      filterSmells: filterSmellArr.length > 0 ? filterSmellArr : undefined,
    });

    localStorage.setItem(FILTER_FIEL, JSON.stringify(filterFielNew));
    onChangeFiel();
  }, [inputChecks]);

  return (
    <NavigatorItemWrapper filterName="Hương vị">
      <ul>
        {conditionsFilterSmells.map((item, index) => (
          <li className="filter__item" key={index}>
            <div className="flex align-center">
              <div className={cl("check")}>
                <input
                  type="checkbox"
                  name="smell"
                  id={"smell-" + index}
                  onChange={() => {
                    handleChangeCheckBox(index);
                  }}
                  checked={inputChecks.includes(index)}
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

Smells.propTypes = {
  onChangeFiel: PropTypes.func,
};
