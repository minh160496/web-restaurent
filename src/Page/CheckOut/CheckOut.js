import React from "react";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import CheckOutForm from "./CheckOutForm";

import { pathObj } from "Routers";

import styles from "./CheckOut.module.scss";

const cl = classNames.bind(styles);
export default function CheckOut() {
  return (
    <div className={cl("checkout")}>
      <LayoutDefault path={pathObj.checkOut.path}>
        <Container>
          <main>
            <CheckOutForm />
          </main>
        </Container>
      </LayoutDefault>
    </div>
  );
}
