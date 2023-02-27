import React, { useContext } from "react";
import classNames from "classnames/bind";
import { Container, Row } from "react-bootstrap";

import { LayoutContext } from "Layout/LayoutNavBar";
import Navigator from "@/Layout/Component/Navigator";

import styles from "./Main.module.scss";

const cl = classNames.bind(styles);
export default function Main({ children }) {
  const navBarRight = useContext(LayoutContext);
  return (
    <main className={cl("main")}>
      <div className={cl("main-wrap")}>
        <Container>
          <Row>
            <div
              className={
                navBarRight
                  ? cl("navbar", "navbar-right") + " col-3"
                  : cl("navbar") + " col-3"
              }
            >
              <Navigator />
            </div>
            <div className={cl("content") + " col-9"}>{children}</div>
          </Row>
        </Container>
      </div>
    </main>
  );
}
