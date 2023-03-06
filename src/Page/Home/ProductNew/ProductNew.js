import classnames from "classnames/bind";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

import Cart from "Component/Cart";
import Slide from "Component/Slide";

import { contextProducts } from "App";
import { getAPINew } from "apiServices/apiNew";

import styles from "./ProductNew.module.scss";

const cl = classnames.bind(styles);
export default function ProductNew() {
  const products = useContext(contextProducts);
  const [productNews, setProductNews] = useState([]);

  useEffect(() => {
    async function getProductNewsFromAPI() {
      const ids = await getAPINew();
      const productNews = products.filter((product) =>
        ids.includes(product.id)
      );
      setProductNews(productNews);
    }
    getProductNewsFromAPI();
  }, [products]);

  return (
    <section className={cl("product-new")}>
      <Container>
        <div className={cl("title")}>
          <h1 className="stylized title-big stylized-after">Món ăn nổi bật</h1>
        </div>
        <div className={cl("content")}>
          <Slide>
            {productNews.map((productNew) => (
              <SwiperSlide
                key={productNew.id}
                className="style-bottom-distance"
              >
                <Cart product={productNew} />
              </SwiperSlide>
            ))}
          </Slide>
        </div>
      </Container>
    </section>
  );
}
