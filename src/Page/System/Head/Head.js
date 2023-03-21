import React from "react";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";

import Img from "Component/Img";

import styles from "./Head.module.scss";

const cl = classNames.bind(styles);
export default function Head() {
  const data = [
    {
      id: 1,
      content: "Hệ thống 8 cửa hàng trên toàn quốc",
      src: "https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/icon_hethong1.png?1677815721948",
    },
    {
      id: 2,
      content: "Hơn 100 nhân viên Để phục vụ quý khách",
      src: "https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/icon_hethong2.png?1677815721948",
    },
    {
      id: 3,
      content: "Mở cửa 8-22h cả CN & Lễ tết",
      src: "https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/icon_hethong3.png?1677815721948",
    },
    {
      id: 4,
      content: "Chất lượng phục vụ hàng đầu",
      src: "https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/icon_hethong1.png?1677815721948",
    },
  ];
  return (
    <div className={cl("head")}>
      <Container className="p-0">
        <Row>
          {data.map((title) => (
            <Col className="col-12 col-sm-6 col-md-3" key={title.id}>
              <div className={cl("head__item")}>
                <div className={cl("image")}>
                  <div className={cl("image-wrapper")}>
                    <Img src={title.src} width={"100%"} heigh={"auto"} />
                  </div>
                </div>
                <div className={cl("text")}>
                  <h3>{title.content}</h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
