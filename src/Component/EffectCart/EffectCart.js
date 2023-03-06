import React from "react";
import { Swiper } from "swiper/react";
import classnames from "classnames/bind";

import { EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import styles from "./EffectCart.module.scss";

const cl = classnames.bind(styles);
export default function EffectCart({ children }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        scrollbar={{ draggable: true }}
        touchRatio={2}
        modules={[EffectCards]}
        className={cl("mySwiper")}
      >
        {children}
      </Swiper>
    </>
  );
}
