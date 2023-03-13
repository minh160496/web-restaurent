import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

import Pagination from "./Pagination";
import CurrentPage from "./CurrentPage";

import { contextIsReRenderMain } from "Layout/Component/Main/Main";

import {
  SORT_CODE,
  CURRENT_PAGE,
  cardNumOfContent,
  FILTER_FIEL,
  RANGE_PRICE,
  FILTER_SMELLS,
  FILTER_SIZES,
} from "CONST";

import styles from "./Content.module.scss";

const cl = classNames.bind(styles);
export default function Content({ products, blogs, isReRender = false }) {
  const [productsAll, setProductsAll] = useState([]);
  const [SortCode, setSortCode] = useState("AZ");
  const [fromIndex, setFromIndex] = useState(0);
  const isReRenderMain = useContext(contextIsReRenderMain); //moi khi render main do thay doi truong loc o nav thi renderlai content (xem <Main/>)
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

  //logic filterNavContent from data localStorage seted
  useEffect(() => {
    let productsAfterFilter = products ? [...products] : [];
    const filterFielsJson = localStorage.getItem(FILTER_FIEL);
    const filterFiels = JSON.parse(filterFielsJson) || {};
    Object.keys(filterFiels).forEach((filterFiel) => {
      switch (filterFiel) {
        case RANGE_PRICE:
          productsAfterFilter = productsAfterFilter.filter((product) => {
            const top = filterFiels[filterFiel].top || Infinity;
            const end = filterFiels[filterFiel].end;
            return product.price >= end && product.price <= top;
          });
          break;
        case FILTER_SMELLS:
          productsAfterFilter = productsAfterFilter.filter((product) => {
            const filterSmellsFromStorage = filterFiels[filterFiel];
            const smellOfProduct = product.smell;
            return filterSmellsFromStorage.includes(smellOfProduct);
          });
          break;
        case FILTER_SIZES:
          productsAfterFilter = productsAfterFilter.filter((product) => {
            const filterSizesFromStorage = filterFiels[filterFiel];
            const sizeOfProduct = product.size;
            return filterSizesFromStorage.includes(sizeOfProduct);
          });
          break;
        default:
      }
    });

    if (localStorage.getItem(SORT_CODE)) {
      const sortCode = localStorage.getItem(SORT_CODE);
      switch (sortCode) {
        case "AZ":
          productsAfterFilter.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            if (nameA === nameB) return 0;
          });
          break;
        case "ZA":
          productsAfterFilter.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) return 1;
            if (nameA > nameB) return -1;
            if (nameA === nameB) return 0;
          });
          break;
        case "price":
          productsAfterFilter.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;
            return priceA - priceB;
          });
          break;
        case "priceReverse":
          productsAfterFilter.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;
            return priceB - priceA;
          });
          break;
        case "new":
          productsAfterFilter.sort((a, b) => {
            const idA = a.id;
            const idB = b.id;
            return idB - idA;
          });
          break;
        default:
      }
    }
    setProductsAll(productsAfterFilter);
  }, [products, isReRenderMain, isReRender]);

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
  isReRender: PropTypes.bool,
};
