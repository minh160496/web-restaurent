import React from "react";
import classNames from "classnames/bind";
import { Container, Row } from "react-bootstrap";

import styles from "./Footer.module.scss";

const cl = classNames.bind(styles);
export default function Footer() {
  return (
    <footer className={cl("footer")}>
      <Container>
        <Row></Row>
      </Container>
    </footer>
  );
}
