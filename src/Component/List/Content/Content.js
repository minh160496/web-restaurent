import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

import Pagination from "./Pagination";
import CurrentPage from "./CurrentPage";

import { SORT_CODE, CURRENT_PAGE, cardNumOfContent } from "CONST";

import styles from "./Content.module.scss";

const cl = classNames.bind(styles);
export default function Content({ products, blogs }) {
  const [productsAll, setProductsAll] = useState([]);
  const [SortCode, setSortCode] = useState("AZ");
  const [fromIndex, setFromIndex] = useState(0);
  const [cardNum, setCardNum] = useState(() => {
    const cardNum = cardNumOfContent.find(
      (objNumCard) => objNumCard.maxBrowserWidth >= window.innerWidth
    ).num;
    return cardNum;
  });

  const handleChangeCardNum = () => {
    const cardNum = cardNumOfContent.find(
      (objNumCard) => objNumCard.maxBrowserWidth >= window.innerWidth
    ).num;
    setCardNum(cardNum);
  };

  useEffect(() => {
    setProductsAll(products);
  }, [products]);

  useEffect(() => {
    const code = localStorage.getItem(SORT_CODE);
    setSortCode(code);
  }, [SortCode]);

  useEffect(() => {
    window.addEventListener("resize", handleChangeCardNum);
  }, []);

  const letPrev = () => {
    setFromIndex((prev) => prev - cardNum);
  };
  const letNext = () => {
    setFromIndex((prev) => prev + cardNum);
  };

  const letSetCurrentPage = () => {
    const currentPage = localStorage.getItem(CURRENT_PAGE);
    const newFromIndex = 1 + cardNum * (currentPage - 1);
    setFromIndex(newFromIndex);
  };

  const numberPage = products ? Math.round(productsAll.length / cardNum) : 1;
  return (
    <div className={cl("content")}>
      <Container className="p-0">
        <Row>
          <CurrentPage
            productsAll={productsAll}
            blogs={blogs}
            cardNum={cardNum}
            fromIndex={fromIndex}
          />
        </Row>
        <Row>
          <Pagination
            letNext={letNext}
            letPrev={letPrev}
            letSetCurrentPage={letSetCurrentPage}
            numberPage={numberPage}
          />
        </Row>
      </Container>
    </div>
  );
}

Content.propTypes = {
  products: PropTypes.array,
  blogs: PropTypes.array,
};
