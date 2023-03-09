import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { Row, Col, Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

import Card from "./Card";
import Slide from "Component/Slide";

import getAPICategory from "apiServices/apiCategory";

import styles from "./Category.module.scss";

const cl = classnames.bind(styles);
export default function Category() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getAPI() {
      const data = await getAPICategory();
      setData(data);
    }
    getAPI();
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
              <Slide>
                {data.map((categoryItem) => (
                  <SwiperSlide
                    key={categoryItem.id}
                    className="style-bottom-distance"
                  >
                    <Card data={categoryItem} />
                  </SwiperSlide>
                ))}
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
