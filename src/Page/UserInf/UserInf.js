import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import ButtonLogOut from "Component/ButtonLogOut";

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
            <div className={cl("user__btn")}>
              <ButtonLogOut />
            </div>
          </div>
        </Container>
      </LayoutDefault>
    </div>
  );
}
