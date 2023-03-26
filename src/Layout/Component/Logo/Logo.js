import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Img from "Component/Img";
import logo from "src/assets/img/logo.png";

import styles from "./Logo.module.scss";

const cl = classNames.bind(styles);
export default function Logo() {
  return (
    <div className={cl("Logo")}>
      <div className={cl("image-logo") + " margin-center"}>
        <Link to="/">
          <Img src={logo} width="100%" heigh="auto" />
        </Link>
      </div>
    </div>
  );
}
