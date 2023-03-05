import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Baner.module.scss";
import Img from "Component/Img";

const cl = classnames.bind(styles);
export default function BanerItem({ data }) {
  return (
    <Link to="/">
      <div className={cl("baner__item")}>
        <div className={cl("item__img")}>
          <Img src={data.thumbnail_src} width="100%" heigh="auto" />
        </div>
        <div className={cl("item__desc")}>
          <div className={cl("desc__title")}>
            <h2>Dola Restaurent</h2>
          </div>
          <div className={cl("desc__content")}>
            <span>{data.slogan}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

BanerItem.propTypes = {
  data: PropTypes.object,
};
