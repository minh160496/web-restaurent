import React, { useContext } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { SwiperSlide } from "swiper/react";

import Slide from "Component/Slide";
import Card from "Component/Card";

import { contextProducts } from "App";

import styles from "./ProductSame.module.scss";

const cl = classNames.bind(styles);
export default function ProductSame({ category }) {
  const products = useContext(contextProducts);
  const productSames = products
    ? products.filter((product) => product.category.includes(category))
    : null;
  return (
    <div className={cl("product-same")}>
      <div className={cl("title")}>
        <h1 className="stylized title-big stylized-after">Món ăn tương tự</h1>
      </div>
      <Slide className={cl("slide")} sliPerViewLg={3} sliPerViewXl={4}>
        {productSames &&
          productSames.map((product) => (
            <SwiperSlide key={product.id}>
              <Card product={product} isDetail />
            </SwiperSlide>
          ))}
      </Slide>
    </div>
  );
}

ProductSame.propTypes = {
  category: PropTypes.string,
};
