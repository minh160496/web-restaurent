import React, { useState } from "react";
import classNames from "classnames/bind";

import Img from "Component/Img";
import PhoneAnimate from "assets/gifs/phone.gif";
import { ReactComponent as IconMinus } from "assets/icon/minus.svg";

import { myPhone } from "CONST";

import styles from "./ContactFix.module.scss";

const cl = classNames.bind(styles);
export default function ContactFix() {
  const [hasClose, setHasClose] = useState(false);
  return (
    <>
      {!hasClose && (
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

          <div className={cl("close")} onClick={() => setHasClose(true)}>
            <IconMinus fill="currentcolor" width={30} height={30} />
          </div>
        </div>
      )}
    </>
  );
}
