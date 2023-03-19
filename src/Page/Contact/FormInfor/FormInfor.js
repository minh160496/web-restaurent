import React from "react";
import classNames from "classnames/bind";

import GroupAddress from "Layout/Component/Footer/GroupAddress";

import styles from "./FormInfor.module.scss";

const cl = classNames.bind(styles);
export default function FormInfor() {
  return (
    <div className={cl("form-inf")}>
      <div className={cl("form__head")}>
        <h2>Nhà hành Dream Restaurent</h2>
      </div>
      <div className={cl("form__content")}>
        <div className={cl("desc")}>
          <span>
            Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm
            phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất.
            Các món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho
            thực khách. Dream Restaurant xin chân thành cảm ơn.
          </span>
        </div>
        <div className={cl("address")}>
          <GroupAddress />
        </div>
      </div>
    </div>
  );
}
