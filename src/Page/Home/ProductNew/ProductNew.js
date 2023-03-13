import classnames from "classnames/bind";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

import Card from "Component/Card/index";
import Slide from "Component/Slide";

import { contextProducts } from "App";

import styles from "./ProductNew.module.scss";

const cl = classnames.bind(styles);
export default function ProductNew() {
  const products = useContext(contextProducts);
  const [productNews, setProductNews] = useState([]);

  useEffect(() => {
    const productNews = products
      ? products.filter((product) => product.isOutStanding)
      : [];
    setProductNews(productNews);
  }, [products]);

  return (
    <section className={cl("product-new")}>
      <Container>
        <div className={cl("title")}>
          <h1 className="stylized title-big stylized-after">Món ăn nổi bật</h1>
        </div>
        <div className={cl("content")}>
          <Slide>
            {productNews &&
              productNews.map((productNew) => (
                <SwiperSlide
                  key={productNew.id}
                  className="style-bottom-distance"
                >
                  <Card product={productNew} />
                </SwiperSlide>
              ))}
          </Slide>
        </div>
      </Container>
    </section>
  );
}
