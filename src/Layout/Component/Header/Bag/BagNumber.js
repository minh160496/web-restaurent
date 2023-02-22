import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "@/Layout/Component/Header/Bag/Bag.module.scss";

const cl = classNames.bind(styles);
export default function BagNumber({ number }) {
  return (
    <div className={cl("bag-number") + " pos-absolute"}>
      <span className="number">{number}</span>
    </div>
  );
}

BagNumber.propTypes = {
  number: PropTypes.number,
};
