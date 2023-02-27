import React, { useState } from "react";
import PropTypes, { node } from "prop-types";
import classnames from "classnames/bind";

import styles from "./DropDown.module.scss";

const cl = classnames.bind(styles);
export default function DropDownChild({ childList }) {
  return <div className={cl("dropdown-child")}></div>;
}

DropDownChild.propTypes = {
  childList: PropTypes.array,
};
