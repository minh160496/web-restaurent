import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { CURRENT_PAGE } from "CONST";
import { contextIsReRenderMain } from "Layout/Component/Main/Main";

import styles from "./Pagination.module.scss";

const cl = classNames.bind(styles);
export default function Pagination({
  numberPage = 2,
  letNext = () => {},
  letPrev = () => {},
  letSetCurrentPage = () => {},
}) {
  const [hasIconPrev, setHasIconPrev] = useState(false);
  const [numPageCur, setNumPageCur] = useState(1);
  const [hasIconNext, setHasIconNext] = useState(true);
  const mapArr = [];
  const isReRenderMain = useContext(contextIsReRenderMain); //re-render main do truong loc o nav thay doi thi phai resetpagination ve currpage=1

  for (let i = 1; i <= numberPage; i++) {
    mapArr.push(i);
  }

  const handleClickNext = () => {
    letNext();
    setHasIconPrev(true);
    setNumPageCur((prevNum) => {
      if (prevNum < numberPage) {
        return prevNum + 1;
      } else {
        return prevNum;
      }
    });
    if (numPageCur >= numberPage - 1) {
      setHasIconNext(false);
    }
  };

  const handleClickNumPage = (index) => {
    setNumPageCur(index + 1);
    const numPageCur = index + 1;
    if (numPageCur < numberPage) {
      setHasIconNext(true);
    } else {
      setHasIconNext(false);
    }
    if (numPageCur > 1) {
      setHasIconPrev(true);
    } else {
      setHasIconPrev(false);
    }
  };

  const handleClickPrev = () => {
    letPrev();
    setHasIconNext(true);
    setNumPageCur((prevNum) => {
      if (prevNum > 1) {
        return prevNum - 1;
      } else {
        return prevNum;
      }
    });
    if (numPageCur <= 2) {
      setHasIconPrev(false);
    }
  };

  useEffect(() => {
    localStorage.setItem(CURRENT_PAGE, numPageCur);
    letSetCurrentPage();
  }, [numPageCur]);

  useEffect(() => {
    //moi khi render main do thay doi truong loc thi content hien thi trang thu nhat
    setNumPageCur(1);
    setHasIconNext(true);
    setHasIconPrev(false);
  }, [isReRenderMain]);

  return (
    <>
      {numberPage > 1 && (
        <div className={cl("foot")}>
          <div className={cl("foot-wrapper")}>
            {hasIconPrev && (
              <div
                className={cl("foot__item", "item__icon")}
                onClick={handleClickPrev}
              >
                <span>{"<<"}</span>
              </div>
            )}
            {mapArr.map((num, index) => (
              <div
                className={cl("foot__item", {
                  active: numPageCur === index + 1,
                })}
                key={index}
                onClick={() => handleClickNumPage(index)}
              >
                <span>{num}</span>
              </div>
            ))}

            {hasIconNext && numberPage > 1 && (
              <div
                className={
                  cl("foot__item", "item__icon") + " flex align-center"
                }
                onClick={handleClickNext}
              >
                <span>{">>"}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

Pagination.propTypes = {
  numberPage: PropTypes.number,
  letNext: PropTypes.func,
  letPrev: PropTypes.func,
  letSetCurrentPage: PropTypes.func,
};
