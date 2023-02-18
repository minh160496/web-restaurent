import React from "react";
import { Container } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Navigator.module.scss";

const cl = classNames.bind(styles);

export default function Navigator({ children }) {
  return (
    <nav className={cl("navigator")}>
      <Container>
        <div className="navigator-content">{children}</div>
      </Container>
    </nav>
  );
}
