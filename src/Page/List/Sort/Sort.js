import React from "react";
import Select from "react-select";
import classNames from "classnames/bind";

import styles from "./Sort.module.scss";

const cl = classNames.bind(styles);
export default function Sort() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customClassNames = {
    control: ({ isFocused }) =>
      classNames(isFocused && cl("select-focus"), cl("select")),
    option: ({ isFocused, isSelected }) =>
      classNames(
        isSelected && cl("option-selected"),
        !isSelected && isFocused && cl("not-selected"),
        cl("option")
      ),
  };
  return (
    <div className={cl("sort") + " flex align-center"}>
      <div className={cl("sort__title")}>
        <h4>Sắp xếp</h4>
      </div>
      <div className={cl("sort__select")}>
        <Select classNames={customClassNames} options={options} />
      </div>
    </div>
  );
}
