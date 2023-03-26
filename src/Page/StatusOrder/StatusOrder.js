import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import LayoutDefault from "Layout/LayoutDefault";
import Img from "Component/Img";
import MyButton from "Component/MyButton";

import { pathObj } from "Routers";
import { USER_LOGIN, USER_ORDERS } from "CONST";
import { contextProducts } from "App";
import {
  getDiscountMoney,
  handleUnitMoney,
  PriceProducts,
  PriceTotalProduct,
  TotalAll,
} from "Component/CalculatorTotal";

import styles from "./StatusOrder.module.scss";

const cl = classNames.bind(styles);
export default function StatusOrder() {
  const products = useContext(contextProducts);
  const [userOrders, setUserOrders] = useState(null);
  const [hasLogin, setHasLogin] = useState(false);
  useEffect(() => {
    function getUserOrdersFromStorage() {
      const userOrdersJson = localStorage.getItem(USER_ORDERS);
      const userOrders = userOrdersJson ? JSON.parse(userOrdersJson) : null;
      if (userOrders) {
        setUserOrders(userOrders);
      }
    }
    function getUserLoginFromStorage() {
      const userLoginJson = localStorage.getItem(USER_LOGIN);
      const userLogin = userLoginJson ? JSON.parse(userLoginJson) : null;
      setHasLogin(!!userLogin);
    }
    getUserOrdersFromStorage();
    getUserLoginFromStorage();
  }, []);

  useEffect(() => {
    document.title = pathObj.statusOrder.title;
  }, []);
  return (
    <div className={cl("status-order")}>
      <LayoutDefault path={pathObj.statusOrder.path}>
        {hasLogin && (
          <>
            {userOrders && (
              <section className={cl("gradient-custom") + " h-100"}>
                <MDBContainer className={cl("container") + " py-5 h-100"}>
                  <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                      <MDBCard className={cl("card")}>
                        <MDBCardHeader className={cl("head") + " px-4 py-5"}>
                          <MDBTypography tag="h3" className="mb-0">
                            Cảm ơn bạn đã tin tưởng Nhà hàng
                          </MDBTypography>
                        </MDBCardHeader>
                        <ul>
                          {userOrders.map((userOrder) => (
                            <li className={cl("orders")} key={userOrder.id}>
                              <MDBCardBody className="p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                  <p className="fw-normal mb-0">Hóa đơn</p>
                                  <p className="mb-0">
                                    {"Mã phiếu thu : 000000" + userOrder.id}
                                  </p>
                                </div>
                                {userOrder.orders.map((cartProduct) => (
                                  <MDBCard
                                    className={cl("card__item") + " mb-4"}
                                    key={cartProduct.id}
                                  >
                                    <MDBCardBody className={cl("body")}>
                                      <MDBRow>
                                        <MDBCol md="2">
                                          <div className={cl("image")}>
                                            <Img
                                              src={
                                                products &&
                                                products[
                                                  cartProduct.productId - 1
                                                ] &&
                                                products[
                                                  cartProduct.productId - 1
                                                ].src
                                              }
                                              width={"100%"}
                                              heigh={"auto"}
                                            />
                                          </div>
                                        </MDBCol>
                                        <MDBCol
                                          md="3"
                                          className="text-center d-flex justify-content-center align-items-center"
                                        >
                                          <p className="mb-0">
                                            {(products &&
                                              products[
                                                cartProduct.productId - 1
                                              ] &&
                                              products[
                                                cartProduct.productId - 1
                                              ].name) ||
                                              "Tên sản phẩm"}
                                          </p>
                                        </MDBCol>

                                        <MDBCol
                                          md="3"
                                          className="text-center d-flex justify-content-center align-items-center"
                                        >
                                          <p className="mb-0">
                                            {"Số lượng: " + cartProduct.num}
                                          </p>
                                        </MDBCol>
                                        <MDBCol
                                          md="3"
                                          className="text-center d-flex justify-content-center align-items-center"
                                        >
                                          <p className="mb-0">
                                            <PriceProducts
                                              id={cartProduct.productId}
                                              num={cartProduct.num}
                                            />
                                          </p>
                                        </MDBCol>
                                      </MDBRow>
                                    </MDBCardBody>
                                  </MDBCard>
                                ))}
                                <MDBRow className="align-items-center mt-5">
                                  <MDBCol md="2">
                                    <p className="fw-bold mb-0">
                                      Trạng thái đơn hàng
                                    </p>
                                  </MDBCol>
                                  <MDBCol md="10">
                                    <MDBProgress className={cl("progress")}>
                                      <MDBProgressBar
                                        className={cl("progress__item")}
                                        width={30}
                                        valuemin={0}
                                        valuemax={100}
                                      />
                                    </MDBProgress>
                                    <div className="d-flex justify-content-around mb-1">
                                      <p className="mt-1 mb-0 small ms-xl-5">
                                        Đang giao
                                      </p>
                                      <p className="mt-1 mb-0 small ms-xl-5">
                                        Đã giao
                                      </p>
                                    </div>
                                  </MDBCol>
                                </MDBRow>

                                <hr className="mb-4" />

                                <div className="d-flex justify-content-between pt-2">
                                  <p className="fw-bold mb-0">
                                    Chi tiết đơn hàng
                                  </p>
                                  <p className="mb-0">
                                    <span className="fw-bold me-4">Tổng</span>{" "}
                                    <PriceTotalProduct
                                      products={products}
                                      cartProducts={userOrder.orders}
                                    />
                                  </p>
                                </div>

                                <div className="d-flex justify-content-between pt-2">
                                  <p className="mb-0">
                                    {"Số hóa đơn: 00000" + userOrder.id}
                                  </p>
                                  <div className={cl("discount")}>
                                    {userOrder.discount && (
                                      <p className="mb-0">
                                        {"Giảm giá: -" +
                                          getDiscountMoney(
                                            userOrder.discount,
                                            products,
                                            userOrder.orders
                                          )}
                                      </p>
                                    )}
                                  </div>
                                </div>

                                {userOrder.shipExpense && (
                                  <div className="d-flex justify-content-end mb-5">
                                    <span className="fw-bold me-4">
                                      Phí giao hàng
                                    </span>
                                    {handleUnitMoney(
                                      userOrder.shipExpense + "000"
                                    )}
                                  </div>
                                )}
                              </MDBCardBody>
                              <MDBCardFooter
                                className={cl("footer") + " border-0 px-4 py-5"}
                              >
                                <MDBTypography className="d-flex align-items-center justify-content-end mb-0">
                                  <span style={{ marginRight: 12 }}>
                                    Tổng thanh toán:
                                  </span>
                                  <span className="mb-0">
                                    <TotalAll
                                      products={products}
                                      cartProducts={userOrder.orders}
                                      ship={userOrder.shipExpense || 0}
                                      discount={userOrder.discount || 0}
                                    />
                                  </span>
                                </MDBTypography>
                              </MDBCardFooter>
                            </li>
                          ))}
                        </ul>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>
            )}
            {!userOrders && (
              <div className={cl("emty")}>
                <h2>Bạn chưa phát sinh đơn hàng nào</h2>
                <MyButton className={cl("btn")} link={pathObj.list.path}>
                  Mua hàng
                </MyButton>
              </div>
            )}
          </>
        )}
        {!hasLogin && (
          <div className={cl("not-login")}>
            <Container>
              <div className={cl("not-login-content")}>
                <h2>Bạn chưa đăng nhập!</h2>
                <MyButton className={cl("btn")} link={pathObj.logIn.path}>
                  Đăng nhập
                </MyButton>
              </div>
            </Container>
          </div>
        )}
      </LayoutDefault>
    </div>
  );
}
