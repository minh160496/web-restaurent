import React from "react";
import classnames from "classnames/bind";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

import BanerItem from "./BanerItem";
import Slide from "Component/Slide";

import styles from "./Baner.module.scss";

const cl = classnames.bind(styles);
export default function Baner() {
  const banerData = [
    {
      id: 1,
      slogan: "Món ăn gia truyền",
      thumbnail_src:
        "https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/banner1.png?1677815721948",
    },
    {
      id: 2,
      slogan: "Hương vị đặc biệt",
      thumbnail_src:
        "https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/banner2.png?1677815721948",
    },
    {
      id: 3,
      slogan: "Công thức độc quyền",
      thumbnail_src:
        "https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/banner3.png?1677815721948",
    },
    {
      id: 4,
      slogan: "Đảm bảo chất lượng",
      thumbnail_src:
        "https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/banner4.png?1677815721948",
    },
  ];
  return (
    <section className={cl("baner")}>
      <Container>
        <Slide sliPerViewXl={4}>
          {banerData.map((item) => (
            <SwiperSlide key={item.id} className="style-bottom-distance">
              <BanerItem data={item} />
            </SwiperSlide>
          ))}
        </Slide>
      </Container>
    </section>
  );
}
