import React from "react";
import classNames from "classnames/bind";

import BagItem from "./BagItem";
import MyButton from "Component/MyButton";

import styles from "./Bag.module.scss";

const cl = classNames.bind(styles);
export default function FormBag() {
  return (
    <div className={cl("form-bag")}>
      <div className={cl("form-bag__body")}>
        <ul>
          <li>
            <BagItem dish={""} quantity={2} />
          </li>
        </ul>
      </div>

      <div className={cl("form-bag__foot")}>
        <div
          className={cl("foot__total") + " flex align-center justify-between"}
        >
          <div className={cl("total__title")}>
            <span>Tổng hiện tại</span>
          </div>
          <div className={cl("total__price")}>
            <span>808.000</span>
          </div>
        </div>
        <div className={cl("foot__pay")}>
          <MyButton className={cl("btn-pay") + " items-center"}>
            <span>Thanh toán</span>
          </MyButton>
        </div>
      </div>
    </div>
  );
}
