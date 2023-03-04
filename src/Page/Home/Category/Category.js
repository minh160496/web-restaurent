import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { Row, Col, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Cart from "./Cart";

import getAPICategory from "apiServices/apiCategory";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Category.module.scss";
import "./Swiper.scss";

const cl = classnames.bind(styles);
export default function Category() {
  const [data, setData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(null);
  useEffect(() => {
    async function getAPI() {
      const data = await getAPICategory();
      setData(data);
    }
    getAPI();
  }, []);

  const handleChangeSlidesPerView = () => {
    if (window.innerWidth <= 350) {
      setSlidesPerView(1);
    }
    if (window.innerWidth > 350 && window.innerWidth <= 576) {
      setSlidesPerView(2);
    }
    if (window.innerWidth > 576 && window.innerWidth <= 998) {
      setSlidesPerView(3);
    }
    if (window.innerWidth > 998) {
      setSlidesPerView(4);
    }
    if (window.innerWidth > 1400) {
      setSlidesPerView(5);
    }
  };

  useEffect(() => {
    handleChangeSlidesPerView();
    window.addEventListener("resize", handleChangeSlidesPerView);
  }, []);

  return (
    <section className={cl("section-category")}>
      <Container>
        <Row>
          <Col className="col-12">
            <div className={cl("category__title")}>
              <h1 className="stylized title-big stylized-after">
                Danh mục nổi bật
              </h1>
            </div>

            <div className={cl("category__content")}>
              <>
                <Swiper
                  slidesPerView={slidesPerView}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {data.map((categoryItem) => (
                    <SwiperSlide key={categoryItem.id}>
                      <Cart data={categoryItem} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
