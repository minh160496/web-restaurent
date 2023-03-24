import React, { useState, createContext, useContext, useEffect } from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";

import CheckOutForm from "./CheckOutForm";
import CheckOutSidebar from "./CheckOutSidebar";
import ModalAlert from "Page/Login/ModalAlert";
import Loading from "Component/Animation/Loading";
import MyButton from "Component/MyButton";

import { pathObj } from "Routers";
import { CART_NUM } from "CONST";
import { contextProducts } from "App";

import styles from "./CheckOut.module.scss";

const cl = classNames.bind(styles);
export const contextReRenderCheckOut = createContext(null);
export default function CheckOut() {
  const products = useContext(contextProducts);
  const [isSubmit, setIsSubmit] = useState({ value: false });
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reRenderCheckOut, setReRenderCheckOut] = useState({ value: false });
  const [isEmtyCart, setIsEmtyCart] = useState(false);
  const handleFormCheckOutData = (dataAdress) => {
    setIsLoading(true);
    const timeOut = setTimeout(() => {
      setIsLoading(false);
      setIsShowModal(true);
    }, 2000);
  };
  const handleReRenderCheckout = () => {
    setReRenderCheckOut({ value: true });
  };
  const handleHideModal = () => {
    setIsShowModal(false);
    const cartNum = {};
    if (products) {
      products.forEach((product) => {
        cartNum[product.id] = { value: 1, isToCart: false };
      });
      localStorage.setItem(CART_NUM, JSON.stringify(cartNum));
    }
  };

  useEffect(() => {
    const cartNumJson = localStorage.getItem(CART_NUM);
    const cartNumObj = cartNumJson ? JSON.parse(cartNumJson) : null;
    if (cartNumObj) {
      const isEmtyCart = !Object.keys(cartNumObj).find(
        (id) => cartNumObj[id].isToCart
      );
      setIsEmtyCart(isEmtyCart);
    }
  }, [isShowModal]);
  return (
    <contextReRenderCheckOut.Provider
      value={{
        func: handleReRenderCheckout,
        isReRender: reRenderCheckOut,
      }}
    >
      <div className={cl("checkout")}>
        {!isEmtyCart && (
          <>
            <Container>
              <main>
                <Row>
                  <Col className="col-12 col-lg-7">
                    <CheckOutForm
                      handleFormCheckOutData={handleFormCheckOutData}
                      isSubmit={isSubmit}
                    />
                  </Col>
                  <Col className="col-12 col-lg-5">
                    <CheckOutSidebar
                      onClickSubmit={() => setIsSubmit({ value: true })}
                    />
                  </Col>
                </Row>
              </main>
              <ModalAlert
                title="Đặt hàng thành công"
                content="Chúng tôi sẽ giao hàng sớm nhất đến cho bạn"
                link={pathObj.list.path}
                valueButton="Xem các sản phẩm khác"
                show={isShowModal}
                onHide={handleHideModal}
              />
            </Container>
            {isLoading && (
              <div className={cl("loading")}>
                <Loading />
              </div>
            )}
          </>
        )}
        {isEmtyCart && (
          <div className={cl("emty")}>
            <div className={cl("emty-content")}>
              <h2>Bạn chưa mua sản phẩm nào!</h2>
              <MyButton link={pathObj.list.path} className={cl("btn")}>
                Mua hàng
              </MyButton>
            </div>
          </div>
        )}
      </div>
    </contextReRenderCheckOut.Provider>
  );
}
