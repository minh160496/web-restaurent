import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";

import { ReactComponent as IconUp } from "assets/icon/arrowUp.svg";

import styles from "./BackTop.module.scss";

const cl = classnames.bind(styles);
export default function BackTop() {
  const [isFade, setIsFade] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsFade(true);
    } else {
      setIsFade(false);
    }
  };
  const handleFadeTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {isFade && (
        <div className={cl("back-top")} onClick={handleFadeTop}>
          <IconUp fill="currentcolor" width={25} height={25} />
        </div>
      )}
    </>
  );
}
