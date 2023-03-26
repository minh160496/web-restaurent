import React from "react";
import classNames from "classnames/bind";

import Img from "Component/Img";
import PhoneAnimate from "assets/gifs/phone.gif";
import MesAnimate from "assets/gifs/mesenger.gif";

import { myPhone, linkProfile } from "CONST";

import styles from "./ContactFix.module.scss";

const cl = classNames.bind(styles);
export default function ContactFix() {
  return (
    <div className={cl("contact-fixed")}>
      <a
        href={"tel: " + myPhone}
        target="_blank"
        rel="noreferrer"
        className={cl("item")}
      >
        <div className={cl("gif")}>
          <Img src={PhoneAnimate} width="100%" heigh="auto" />
        </div>
        <span className={cl("detail")}>{myPhone}</span>
      </a>
      <a
        href={linkProfile}
        target="_blank"
        rel="noreferrer"
        className={cl("item", "mes")}
      >
        <div className={cl("gif")}>
          <Img src={MesAnimate} width="100%" heigh="auto" />
        </div>
        <span className={cl("detail")}>Messenger</span>
      </a>
    </div>
  );
}
