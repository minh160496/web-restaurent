import React, { useEffect } from "react";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import SystemAddress from "./SystemAddress";
import Head from "./Head";

import { pathObj } from "Routers";

import styles from "./System.module.scss";

const cl = classNames.bind(styles);
export default function System() {
  useEffect(() => {
    document.title = pathObj.system.title;
  }, []);
  return (
    <div className={cl("system")}>
      <LayoutDefault path={pathObj.system.path}>
        <div className={cl("main")}>
          <Container>
            <Head />
            <SystemAddress />
          </Container>
        </div>
      </LayoutDefault>
    </div>
  );
}
