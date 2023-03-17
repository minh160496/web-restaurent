import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import MyButton from "Component/MyButton";
import ChooseQuanlity from "Component/ChooseQuanlity";
import DelProduct from "Component/DelProduct";
import { ReactComponent as IconBag } from "assets/icon/bag.svg";
import { PriceProducts, TotalAll } from "Component/CalculatorTotal";
import { PriceTotalProduct } from "Component/CalculatorTotal";

import { CART_NUM } from "CONST";
import { contextProducts } from "App";
import { contextReRenderLayoutDefault } from "Layout/LayoutDefault";
import { contextReRenderLayoutNavBar } from "Layout/LayoutNavBar";

import styles from "./MainShoppingCart.module.scss";

const cl = classNames.bind(styles);
export default function MainShoppingCart({ isMini = false }) {
  const products = useContext(contextProducts);
  const reRenderLayoutDefault = useContext(contextReRenderLayoutDefault);
  const reRenderLayoutNavBarObj = useContext(contextReRenderLayoutNavBar);

  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    const cartNumJson = localStorage.getItem(CART_NUM) || "";
    const cartNum = cartNumJson ? JSON.parse(cartNumJson) : {};
    const cartProducts = [];
    Object.keys(cartNum)
      .filter((idObj) => cartNum[idObj].value && cartNum[idObj].isToCart)
      .forEach((cartProduct, index) => {
        cartProducts.push({
          id: index + 1,
          productId: cartProduct,
          num: cartNum[cartProduct].value,
        });
      });
    setCartProducts(cartProducts);
  }, [reRenderLayoutDefault, reRenderLayoutNavBarObj]);
  return (
    <div className={cl("main", { mini: isMini })}>
      {cartProducts && cartProducts.length > 0 && (
        <MDBContainer
          className={!isMini ? "py-5 h-100" : cl("main__container")}
        >
          <MDBRow
            className={
              !isMini ? "justify-content-center my-4" : "justify-content-center"
            }
          >
            <MDBCol md={!isMini ? "8" : "12"}>
              <MDBCard className={cl("cart-list-product") + " " + "mb-4"}>
                {!isMini && (
                  <MDBCardHeader className={cl("header") + " " + "py-3"}>
                    <MDBTypography tag="h5" className="mb-0">
                      {`Có ${cartProducts.length} sản phẩm trong giỏ hàng`}
                    </MDBTypography>
                  </MDBCardHeader>
                )}
                <MDBCardBody>
                  {cartProducts.length > 0 &&
                    cartProducts.map((cartProduct) => (
                      <div key={cartProduct.id}>
                        <MDBRow>
                          <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                            <MDBRipple
                              rippleTag="div"
                              rippleColor="light"
                              className="bg-image rounded hover-zoom hover-overlay"
                            >
                              <img
                                src={
                                  products &&
                                  products[cartProduct.productId - 1]
                                    ? products[cartProduct.productId - 1].src
                                    : ""
                                }
                                className="w-100"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCol>

                          <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                            <h2 className={cl("product-name")}>
                              {products && products[cartProduct.productId - 1]
                                ? products[cartProduct.productId - 1].name
                                : ""}
                            </h2>
                            <p className={isMini ? "m-0" : ""}>
                              {!isMini && "Giá sản phẩm:  "}
                              <span className={cl("price-product")}>
                                {products &&
                                  products[cartProduct.productId - 1] &&
                                  products[cartProduct.productId - 1].price +
                                    ".000đ"}
                              </span>
                            </p>

                            <div>
                              <DelProduct
                                id={+cartProduct.productId}
                                isMini={isMini}
                              />
                            </div>
                          </MDBCol>
                          <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                            <div
                              className={cl("quanlity")}
                              style={{ maxWidth: "300px" }}
                            >
                              <ChooseQuanlity id={+cartProduct.productId} />
                            </div>

                            <p className="text-start text-md-center">
                              <strong>
                                {" "}
                                <PriceProducts
                                  id={cartProduct.productId}
                                  num={cartProduct.num}
                                />
                              </strong>
                            </p>
                          </MDBCol>
                        </MDBRow>

                        {cartProduct.id < cartProducts.length && (
                          <hr className={cl("line-space") + " " + "my-4"} />
                        )}
                      </div>
                    ))}
                </MDBCardBody>
              </MDBCard>

              {!isMini && (
                <MDBCard className={cl("cart-pay") + " " + "mb-4 mb-lg-0"}>
                  <MDBCardBody>
                    <p>
                      <strong>Chúng tôi chấp nhận các loại thẻ sau</strong>
                    </p>
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                      alt="PayPal acceptance mark"
                    />
                  </MDBCardBody>
                </MDBCard>
              )}
            </MDBCol>
            <MDBCol md={!isMini ? "4" : "12"}>
              <MDBCard className={cl("cart-total") + " " + "mb-4"}>
                {!isMini && (
                  <MDBCardHeader className={cl("header")}>
                    <MDBTypography tag="h5" className="mb-0">
                      Tổng
                    </MDBTypography>
                  </MDBCardHeader>
                )}
                <MDBCardBody>
                  <MDBListGroup flush="true">
                    {!isMini && (
                      <>
                        <MDBListGroupItem
                          className={
                            cl("cart-total__content") +
                            " " +
                            "d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                          }
                        >
                          Các món đã đặt
                          <span>
                            <PriceTotalProduct
                              products={products}
                              cartProducts={cartProducts}
                            />
                          </span>
                        </MDBListGroupItem>
                        <MDBListGroupItem
                          className={
                            cl("cart-total__content", "ship-expense") +
                            " " +
                            "d-flex justify-content-between align-items-center px-0"
                          }
                        >
                          Phí giao hàng
                          <span>0đ</span>
                        </MDBListGroupItem>
                      </>
                    )}
                    <MDBListGroupItem
                      className={
                        cl("cart-total__content") +
                        " " +
                        (!isMini
                          ? "d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                          : "d-flex justify-content-between align-items-center border-0 px-0 mb-0")
                      }
                    >
                      <div>
                        <strong>Tổng hiện tại</strong>
                        <strong>
                          <p className="mb-0">(Đã bao gồm VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong className={cl("total")}>
                          <TotalAll
                            products={products}
                            cartProducts={cartProducts}
                          />
                        </strong>
                      </span>
                    </MDBListGroupItem>
                  </MDBListGroup>

                  <MyButton className={cl("btn")}>Thanh toán</MyButton>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}

      {cartProducts && cartProducts.length === 0 && (
        <Container>
          <div className={cl("bag-empty")}>
            <h2>Giỏ hàng trống</h2>
            <IconBag fill="currentcolor" width={150} height={150} />
          </div>
        </Container>
      )}
    </div>
  );
}

MainShoppingCart.propTypes = {
  isMini: PropTypes.bool,
};
