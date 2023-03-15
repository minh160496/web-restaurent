import React from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import FormInfor from "./FormInfor";
import FormContact from "./FormContact";
import Map from "./Map";

import styles from "./Contact.module.scss";
import { pathObj } from "Routers";

const cl = classNames.bind(styles);
export default function Contact() {
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
