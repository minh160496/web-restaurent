import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./About.module.scss";
import Img from "Component/Img";

const cl = classnames.bind(styles);
export default function About() {
  return (
    <section className={cl("section-about")}>
      <Container>
        <Row>
          <Col className="col-12 col-lg-6">
            <div className={cl("about-text")}>
              <div className={"head"}>
                <div className={cl("title-small")}>
                  <span>Về Chúng Tôi</span>
                </div>
                <div className={cl("title")}>
                  <h1 className="stylized">Dola Restaurant</h1>
                </div>
              </div>
              <div className={cl("content")}>
                <span>
                  Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận
                  tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt
                  với nhất. Các món ăn với công thức độc quyền sẽ mang lại hương
                  vị mới mẻ cho thực khách. Dola Restaurant xin chân thành cảm
                  ơn.
                </span>
              </div>
              <div className={cl("link")}>
                <Link to="/" className={cl("link-text")}>
                  <span>Xem thêm</span>
                </Link>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-lg-6">
            <Link to="/" className={cl("about-img")}>
              <div className={cl("img-item")}>
                <Img
                  src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/about_image.jpg?1677815721948"
                  width="100%"
                  heigh="auto"
                />
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
