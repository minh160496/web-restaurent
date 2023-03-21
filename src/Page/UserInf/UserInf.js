import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import ButtonLogOut from "Component/ButtonLogOut";
import MyButton from "Component/MyButton";

import { pathObj } from "Routers";
import { USER_LOGIN } from "CONST";

import styles from "./UserInf.module.scss";

const cl = classNames.bind(styles);
export default function UserInf() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const userInfJson = localStorage.getItem(USER_LOGIN);
    const userInf = userInfJson ? JSON.parse(userInfJson) : {};
    const email = userInf.email || "";
    setEmail(email);
  }, []);

  return (
    <div className={cl("user-inf")}>
      <LayoutDefault path={pathObj.userInf.path}>
        <Container>
          <div className={cl("main-inf")}>
            <div className={cl("inf-email") + " flex align-center"}>
              <span>Địa chỉ email: {email}</span>
            </div>
            <Row>
              <Col className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className={cl("user__btn")}>
                  <ButtonLogOut />
                </div>
              </Col>
              <Col className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className={cl("user__btn")}>
                  <MyButton className={cl("btn")} link={pathObj.favorites.path}>
                    Món ăn yêu thích
                  </MyButton>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </LayoutDefault>
    </div>
  );
}
