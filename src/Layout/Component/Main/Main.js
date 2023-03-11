import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

import { LayoutContext } from "Layout/LayoutNavBar";
import Navigator from "@/Layout/Component/Navigator";
import NavOffCanvas from "Layout/Component/NavOffCanvas";
import { ReactComponent as IconFilter } from "@/assets/icon/filter.svg";

import styles from "./Main.module.scss";

const cl = classNames.bind(styles);
export default function Main({ children, isBlog = false }) {
  const navBarRight = useContext(LayoutContext);
  return (
    <main className={cl("main")}>
      <div className={cl("main-wrap")}>
        <Container>
          <Row>
            <div
              className={
                navBarRight
                  ? cl("navbar", "navbar-right") + " col-0 col-lg-3"
                  : cl("navbar") + " col-0 col-lg-3"
              }
            >
              <Navigator isBlog={isBlog} />
            </div>
            <div className={cl("content") + " col-12 col-lg-9"}>{children}</div>
          </Row>
        </Container>
        <div className={cl("main-fixed")}>
          <NavOffCanvas isBlog={isBlog} />
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  isBlog: PropTypes.bool,
};
