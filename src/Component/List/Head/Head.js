import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Sort from "../Sort";

import styles from "./Head.module.scss";

const cl = classNames.bind(styles);
export default function Head({ title, isBlog = false }) {
  return (
    <div className={cl("head")}>
      <div className={cl("head__title")}>
        <h1>{title}</h1>
      </div>
      {!isBlog && (
        <div className={cl("head__sort")}>
          <Sort />
        </div>
      )}
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  isBLog: PropTypes.bool,
};
