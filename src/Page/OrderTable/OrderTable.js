import React from "react";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import Form from "Component/Form";

import { pathObj } from "Routers";

import styles from "./OrderTable.module.scss";

const cl = classNames.bind(styles);
export default function OrderTable() {
  return (
    <div className={cl("order-table")}>
      <LayoutDefault path={pathObj.orderTable.path}>
        <div className={cl("main")}>
          <Container>
            <div className={cl("container-wrapper")}>
              <Row>
                <Col className="col-0 col-sm-1 col-md-2 col-xl-3"></Col>
                <Col className="col-12 col-sm-10 col-md-8 col-xl-6">
                  <div className={cl("form-wrapper")}>
                    <div className={cl("title")}>
                      <h1 className="stylized title-big stylized-after">
                        Liên hệ đặt bàn
                      </h1>
                    </div>
                    <div className={cl("form-main")}>
                      <Form
                        hasLabel
                        firstName
                        lastName
                        email
                        tel
                        numPeoples
                        date
                      />
                    </div>
                  </div>
                </Col>
                <Col className="col-0 col-sm-1 col-md-2 col-xl-3"></Col>
              </Row>
            </div>
          </Container>
        </div>
      </LayoutDefault>
    </div>
  );
}
