import React from "react";
import classNames from "classnames/bind";

import styles from "./SocialPay.module.scss";
import Img from "Component/Img";
import { Link } from "react-router-dom";

const cl = classNames.bind(styles);
export default function SocialPay() {
  return (
    <div className={cl("social-pay")}>
      <div className={cl("social")}>
        <div className={cl("social__title")}>
          <h3>MẠNG XÃ HỘI</h3>
        </div>
        <div className={cl("social__body") + " flex"}>
          <a href="#">
            <div className={cl("social__item", "item-zalo")}>
              <Img
                src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/zalo.svg?1677232264471"
                width="100%"
                heigh="auto"
              />
            </div>
          </a>
          <a href="#">
            <div className={cl("social__item", "item-fa")}>
              <Img
                src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/facebook.svg?1677232264471"
                width="100%"
                heigh="auto"
              />
            </div>
          </a>
          <a href="#">
            <div className={cl("social__item", "item-youtobe")}>
              <Img
                src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/youtube.svg?1677232264471"
                width="100%"
                heigh="auto"
              />
            </div>
          </a>
        </div>
      </div>
      <div className={cl("pay")}>
        <div className={cl("pay__title")}>
          <h3>THANH TOÁN</h3>
        </div>
        <div className={cl("pay__body") + " flex"}>
          <a href="#">
            <div className={cl("pay__item")}>
              <Img
                src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/payment_1.png?1677232264471"
                width="100%"
                heigh="auto"
              />
            </div>
          </a>
          <a href="#">
            <div className={cl("pay__item")}>
              <Img
                src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/payment_2.png?1677232264471"
                width="100%"
                heigh="auto"
              />
            </div>
          </a>
          <a href="#">
            <div className={cl("pay__item")}>
              <Img
                src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/payment_3.png?1677232264471"
                width="100%"
                heigh="auto"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
