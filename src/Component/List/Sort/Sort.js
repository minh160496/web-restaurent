import React, { useState } from "react";
import Select from "react-select";
import classNames from "classnames/bind";

import { SORT_CODE, sortTypes } from "Component/List/Content/CONST";

import styles from "./Sort.module.scss";

const cl = classNames.bind(styles);
export default function Sort() {
  const options = [];
  const [sortCode, setSortCode] = useState(() => {
    if (localStorage.getItem(SORT_CODE)) {
      return localStorage.getItem(SORT_CODE);
    }
    return "AZ";
  });
  function setOptions() {
    for (let i = 0; i < sortTypes.length; i++) {
      const option = {
        value: sortTypes[i].type,
        label: sortTypes[i].type,
      };
      options.push(option);
    }
  }
  setOptions();

  const customClassNames = {
    control: ({ isFocused }) =>
      classNames(cl("select-control"), isFocused && cl("select-focus")),
    option: ({ isFocused, isSelected }) =>
      classNames(
        cl("select-option"),
        isSelected && cl("option-selected"),
        !isSelected && isFocused && cl("option-not-selected")
      ),
  };
  const handleChangeSelect = (e) => {
    const code = sortTypes.find((item) => item.type === e.value.trim()).code;
    setSortCode(code);
    localStorage.setItem(SORT_CODE, code);
  };

  return (
    <div className={cl("sort") + " flex align-center justify-between"}>
      <div className={cl("sort__title")}>
        <h4>Sắp xếp:</h4>
      </div>
      <div className={cl("sort__select")}>
        <Select
          onChange={handleChangeSelect}
          classNames={customClassNames}
          options={options}
          isOptionSelected={true}
          value={options.filter(
            (option) =>
              option.value ===
              sortTypes.find((item) => item.code === sortCode).type
          )}
        />
      </div>
    </div>
  );
}
