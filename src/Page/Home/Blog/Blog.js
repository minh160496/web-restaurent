import React from "react";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

import Slide from "Component/Slide";
import BlogItem from "./BlogItem";

import styles from "./Blog.module.scss";

const cl = classnames.bind(styles);
export default function Blog() {
  return (
    <section className={cl("blog")}>
      <Container>
        <div className={cl("title")}>
          <h1 className="stylized title-big stylized-after">Tin tức</h1>
        </div>
        <div className={cl("blog__content")}>
          <Slide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Slide>
        </div>
      </Container>
    </section>
  );
}
