import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./GroupAddress.module.scss";
import MyButton from "Component/MyButton";

const cl = classnames.bind(styles);
export default function GroupAddress() {
  return (
    <div className={cl("group-address")}>
      <div className={cl("group-address__title")}>
        <h3>Cửa hàng chính</h3>
      </div>
      <div className={cl("group-address__body")}>
        <div className={cl("body__item", "item-address")}>
          <span>
            <span className={cl("title")}>Địa chỉ: </span>{" "}
            <span>70 Lữ Gia, phường 15, quận 11, TP.HCM</span>
          </span>
        </div>
        <div className={cl("body__item", "item-tel")}>
          <span>
            <span className={cl("title")}>Điện thoại: </span>{" "}
            <span className={cl("detail")}>1900 6750</span>
          </span>
        </div>

        <div className={cl("body__item", "item-email")}>
          <span>
            <span className={cl("title")}>Email: </span>{" "}
            <span className={cl("detail")}>Leminh16041996@gmail.com</span>
          </span>
        </div>
      </div>
      <Link to="/" className={cl("group-address__button") + " btn-hover"}>
        <MyButton className={cl("btn")}>Hệ thống cửa hàng</MyButton>
      </Link>
    </div>
  );
}
