import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

import Img from "Component/Img";
import logo from "@/assets/img/logo.jpg";

import styles from "./Info.module.scss";

const cl = classnames.bind(styles);
export default function Info() {
  return (
    <div className={cl("footer__inf")}>
      <Link to="/" className={cl("logo")}>
        <Img src={logo} width="100%" heigh="auto" />
      </Link>

      <div className={cl("description")}>
        <span>
          Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục
          vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất. Các món
          ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho thực khách.
          Dream Restaurant xin chân thành cảm ơn.
        </span>
      </div>
    </div>
  );
}
