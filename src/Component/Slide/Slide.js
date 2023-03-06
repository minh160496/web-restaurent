import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import { Pagination } from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Slide.module.scss";

const cl = classnames.bind(styles);
export default function Slide({
  children,
  sliPerViewSm = 1.5,
  sliPerViewMd = 2.5,
  sliPerViewLg = 4,
  sliPerViewXl = 5,
}) {
  const [slidesPerView, setSlidesPerView] = useState(null);

  const handleChangeSlidesPerView = () => {
    if (window.innerWidth <= 350) {
      setSlidesPerView(1.5);
    }
    if (window.innerWidth > 350 && window.innerWidth <= 576) {
      setSlidesPerView(sliPerViewSm);
    }
    if (window.innerWidth > 576 && window.innerWidth <= 998) {
      setSlidesPerView(sliPerViewMd);
    }
    if (window.innerWidth > 998) {
      setSlidesPerView(sliPerViewLg);
    }
    if (window.innerWidth > 1400) {
      setSlidesPerView(sliPerViewXl);
    }
  };

  useEffect(() => {
    handleChangeSlidesPerView();
    window.addEventListener("resize", handleChangeSlidesPerView);
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        touchRatio={2}
        modules={[Pagination]}
        className={cl("swiper")}
      >
        {children}
      </Swiper>
    </>
  );
}

Slide.propTypes = {
  children: PropTypes.node,
  sliPerViewSm: PropTypes.number,
  sliPerViewMd: PropTypes.number,
  sliPerViewLg: PropTypes.number,
  sliPerViewXl: PropTypes.number,
};
