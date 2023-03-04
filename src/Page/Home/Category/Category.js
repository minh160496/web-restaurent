import React from "react";
import classnames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Cart from "./Cart";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Category.module.scss";
import "./Swiper.scss";

const cl = classnames.bind(styles);
export default function Category() {
  return (
    <section className={cl("section-category")}>
      <Container>
        <Col className="col-12">
          <div className={cl("category__title")}>
            <h1 className="stylized title-big stylized-after">
              Danh mục nổi bật
            </h1>
          </div>

          <div className={cl("category__content")}>
            <>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Cart />
                </SwiperSlide>
                <SwiperSlide>
                  <Cart />
                </SwiperSlide>
                <SwiperSlide>
                  <Cart />
                </SwiperSlide>
                <SwiperSlide>
                  <Cart />
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </Col>
      </Container>
    </section>
  );
}
