import React from "react";
import classNames from "classnames/bind";

import Img from "Component/Img";
import { ReactComponent as IconMinus } from "assets/icon/minus.svg";
import { ReactComponent as IconPlus } from "assets/icon/plus.svg";

import styles from "./Bag.module.scss";

const cl = classNames.bind(styles);
export default function BagItem() {
  return (
    <a
      href="#"
      className={cl("bag__item") + " flex align-center justify-between"}
    >
      <div className={cl("wrapper") + " flex align-center"}>
        <div className={cl("bag__item__img")}>
          <Img
            src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_1.jpg?1676345245315"
            width="100%"
            heigh="auto"
          />
        </div>

        <div className={cl("bag__item__inf")}>
          <div className={cl("inf__item", "inf__name")}>
            <h3>Salad rau</h3>
          </div>
          <div className={cl("inf__item", "inf__quantity")}>
            <div className={cl("quantity__title")}>
              <span>Số lượng</span>
            </div>
            <div className={cl("quantity__body") + " flex align-center"}>
              <div className={cl("icon", "icon-minus") + " items-center"}>
                <IconMinus fill="currentcolor" />
              </div>
              <div className={cl("quantity-number") + " items-center"}>
                <span>5</span>
              </div>
              <div className={cl("icon", "icon-minus") + " items-center"}>
                <IconPlus fill="currentcolor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cl("bag__item__foot")}>
        <div className={cl("foot-price")}>
          <span>68.000</span>
        </div>
        <div className={cl("foot-delete")}>
          <span>Xóa</span>
        </div>
      </div>
    </a>
  );
}
