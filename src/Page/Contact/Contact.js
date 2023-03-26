import React, { useEffect } from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import FormInfor from "./FormInfor";
import FormContact from "./FormContact";
import Map from "./Map";

import { pathObj } from "Routers";

import styles from "./Contact.module.scss";

const cl = classNames.bind(styles);
export default function Contact() {
  useEffect(() => {
    document.title = pathObj.contact.title;
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutDefault path={pathObj.contact.path}>
      <div className={cl("contact")}>
        <Container>
          <Row>
            <Col className="col-12 col-md-6">
              <FormInfor />
            </Col>
            <Col className="col-12 col-md-6">
              <FormContact />
            </Col>
          </Row>
          <Row>
            <Map />
          </Row>
        </Container>
      </div>
    </LayoutDefault>
  );
}
