import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import classnames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./CountUp.module.scss";
import Img from "Component/Img";

const cl = classnames.bind(styles);
export default function CountUpItem({
  src,
  title,
  start = 0,
  end,
  duration = 1,
  windowScrollY = 3266,
}) {
  const [isStart, setIsStart] = useState(false);
  const handleStartCount = () => {
    if (window.scrollY > windowScrollY) {
      setIsStart(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStartCount);
  }, []);

  return (
    <div className={cl("count__item")}>
      <div className={cl("item__img")}>
        <Img src={src} width="100%" heigh="auto" />
      </div>
      <div className={cl("item__num")}>
        <CountUp start={start} end={end} duration={duration}>
          {({ countUpRef, start }) => {
            if (isStart) start();
            return (
              <div>
                <span ref={countUpRef}></span>
                <span>+</span>
              </div>
            );
          }}
        </CountUp>
      </div>
      <div className={cl("item__type")}>
        <span>{title}</span>
      </div>
    </div>
  );
}

CountUpItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.number,
  end: PropTypes.number,
  duration: PropTypes.number,
  windowScrollY: PropTypes.number,
};
