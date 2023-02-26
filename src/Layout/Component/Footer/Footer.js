import React from "react";
import classNames from "classnames/bind";
import { Container, Row } from "react-bootstrap";

import Info from "./Info";
import GroupAddress from "./GroupAddress";
import LinkList from "./LinkList/LinkList";
import SocialPay from "./SocialPay";

import styles from "./Footer.module.scss";

const cl = classNames.bind(styles);
export default function Footer() {
  return (
    <footer className={cl("footer")}>
      <div className={cl("footer__mid")}>
        <Container>
          <Row>
            <div className="col-12 col-lg-5">
              <Info />
              <GroupAddress />
            </div>
            <div className="col-12 col-lg-7">
              <Container className="p-0">
                <Row className="p-0">
                  <div className="col-12 col-md-8 p-0">
                    <LinkList />
                  </div>
                  <div className="col-12 col-md-4 p-0">
                    <SocialPay />
                  </div>
                </Row>
              </Container>
            </div>
          </Row>
        </Container>
      </div>
      <div className={cl("footer__end")}>
        <h4>
          Bản quyền thuộc về<strong> Minh's project</strong>
        </h4>
        <span>Cung cấp bởi Minh</span>
      </div>
    </footer>
  );
}
