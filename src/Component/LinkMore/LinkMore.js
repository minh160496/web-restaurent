import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./LinkMore.module.scss";

const cl = classnames.bind(styles);
export default function LinkMore({ link = "/" }) {
  return (
    <div className={cl("link")}>
      <Link to={link} className={cl("link-text")}>
        <span>Xem thêm</span>
      </Link>
    </div>
  );
}

LinkMore.propTypes = {
  link: PropTypes.string,
};
