import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import ButtonLogOut from "Component/ButtonLogOut";
import MyButton from "Component/MyButton";

import { pathObj } from "Routers";
import { USER_LOGIN, USER_ORDERS } from "CONST";

import styles from "./UserInf.module.scss";

const cl = classNames.bind(styles);
export default function UserInf() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(null);
  const [orders, setOrders] = useState(0);
  useEffect(() => {
    const userInfJson = localStorage.getItem(USER_LOGIN);
    const userInf = userInfJson ? JSON.parse(userInfJson) : {};
    const email = userInf.email || "";
    const name = userInf.firstName + " " + userInf.lastName;
    setEmail(email);
    setName(name);
    function getOrdersFromStorage() {
      const userOrdersJson = localStorage.getItem(USER_ORDERS);
      const userOrdersArr = userOrdersJson ? JSON.parse(userOrdersJson) : null;
      if (userOrdersArr) {
        const orders = userOrdersArr.length;
        setOrders(orders);
      }
    }
    getOrdersFromStorage();
  }, []);

  useEffect(() => {
    document.title = pathObj.userInf.title;
  }, []);

  return (
    <div className={cl("user-inf")}>
      <LayoutDefault path={pathObj.userInf.path}>
        <Container>
          <div className={cl("main-inf")}>
            <div className={cl("inf-name") + " flex align-center"}>
              <span>Họ và tên: {name}</span>
            </div>
            <div className={cl("inf-email") + " flex align-center"}>
              <span>Địa chỉ email: {email}</span>
            </div>
            <div className={cl("inf-rank") + " flex align-center"}>
              <span>Xếp hạng thành viên: Hạng đồng</span>
            </div>
            <div className={cl("inf-order") + " flex align-center"}>
              <span>Số đơn hàng đã phát sinh: {orders} đơn hàng</span>
            </div>
            <Row>
              <Col className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className={cl("user__btn")}>
                  <MyButton className={cl("btn")} link={pathObj.favorites.path}>
                    Món ăn yêu thích
                  </MyButton>
                </div>
              </Col>
              <Col className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className={cl("user__btn")}>
                  <MyButton
                    className={cl("btn")}
                    link={pathObj.statusOrder.path}
                  >
                    {pathObj.statusOrder.title}
                  </MyButton>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className={cl("user__btn")}>
                  <ButtonLogOut />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </LayoutDefault>
    </div>
  );
}
