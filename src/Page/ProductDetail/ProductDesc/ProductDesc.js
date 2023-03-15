import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./ProductDesc.module.scss";

const cl = classNames.bind(styles);
export default function ProductDesc() {
  const [actived, setActived] = useState(1);
  return (
    <div className={cl("product-desc")}>
      <div className={cl("heading")}>
        <div
          className={cl("title", { actived: actived === 1 })}
          onClick={() => setActived(1)}
        >
          <h2>Mô tả</h2>
        </div>
        <div
          className={cl("title", { actived: actived === 2 })}
          onClick={() => setActived(2)}
        >
          <h2>Chính sách</h2>
        </div>
      </div>
      <div className={cl("main")}>
        {actived === 1 && <span>Phần mô tả món ăn</span>}
        {actived === 2 && <span>Phần chính sách món ăn</span>}
      </div>
    </div>
  );
}
