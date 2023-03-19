import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";

import Img from "Component/Img";
import LinkMore from "Component/LinkMore";

import { pathObj } from "Routers";

import styles from "./About.module.scss";

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
                  <h1 className="stylized">Dream Restaurant</h1>
                </div>
              </div>
              <div className={cl("content")}>
                <span>
                  Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận
                  tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt
                  với nhất. Các món ăn với công thức độc quyền sẽ mang lại hương
                  vị mới mẻ cho thực khách. Dream Restaurant xin chân thành cảm
                  ơn.
                </span>
              </div>
              <LinkMore link={pathObj.about.path} />
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
