import React from "react";
import classNames from "classnames/bind";

import MyButton from "Component/MyButton";

import { listFootItem } from "Layout/Component/Header/OffCanvas";

import styles from "./User.module.scss";

const cl = classNames.bind(styles);
export default function FormUser() {
  return (
    <div className={cl("form-user")}>
      <div className={cl("btn-wrapper")}>
        {listFootItem.map((item, index) => (
          <MyButton className={cl("btn-user") + " items-center"} key={index}>
            <span>{item.fiel}</span>
          </MyButton>
        ))}
      </div>
    </div>
  );
}
