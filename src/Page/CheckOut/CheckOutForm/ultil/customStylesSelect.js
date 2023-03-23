import classNames from "classnames/bind";

import styles from "../CheckOutForm.module.scss";

const cl = classNames.bind(styles);
export const customClassNames = {
  control: ({ isFocused }) =>
    classNames(cl("select-control"), isFocused && cl("select-focus")),
  option: ({ isFocused, isSelected }) =>
    classNames(
      cl("select-option"),
      isSelected && cl("option-selected"),
      !isSelected && isFocused && cl("option-not-selected")
    ),
};
