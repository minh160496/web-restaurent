import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Container, Row, Col, Modal } from "react-bootstrap";

import MyButton from "Component/MyButton";
import Img from "Component/Img";

import { ReactComponent as IconSucsess } from "assets/icon/sucsess.svg";

import { handleUnitMoney } from "Component/CalculatorTotal";
import { CART_NUM } from "CONST";
import { pathObj } from "Routers";
import { contextProducts } from "App";

import styles from "./ModalAddCart.module.scss";

const cl = classNames.bind(styles);
export default function ModalAddCart(props) {
  const products = useContext(contextProducts);
  const product = products ? products[props.id - 1] : {};
  const [num, setNum] = useState(1);
  const [countProductCarts, setCountProductCarts] = useState(0);
  useEffect(() => {
    const cartProductsJson = localStorage.getItem(CART_NUM);
    const cartProducts = cartProductsJson ? JSON.parse(cartProductsJson) : {};
    const countProductCarts = Object.keys(cartProducts)
      .filter((key) => cartProducts[key].isToCart)
      .reduce((acc, curr) => acc + cartProducts[curr].value, 0);
    const newNum =
      cartProducts && cartProducts[props.id] ? cartProducts[props.id].value : 1;
    setNum(newNum);
    setCountProductCarts(countProductCarts);
  }, [product, props.onHide]);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}
      className={props.className + " " + cl("modal")}
    >
      <Modal.Header closeButton className={cl("header")}>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className={"flex align-center justify-between"}>
            <div className={cl("icon")}>
              <IconSucsess fill="currentcolor" width={30} height={30} />
            </div>
            <div className={cl("title")}>
              <h3>{`Thêm thành công ${num} sản phẩm vào giỏ hàng`}</h3>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={cl("body")}>
        <div className={"flex align-center"}>
          <div className={cl("image")}>
            <Img src={product && product.src} width={"100%"} heigh={"auto"} />
          </div>
          <div className={cl("text")}>
            <div className={cl("name")}>
              <span>{product && product.name}</span>
            </div>
            <div className={cl("price")}>
              <span>{handleUnitMoney(product && product.price + "000")}</span>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={cl("footer") + " flex align-center"}>
        <Container>
          <Row>
            <div className={cl("cout-products-cart")}>
              <span>{`Hiện có ${countProductCarts} sản phẩm trong giỏ hàng`}</span>
            </div>
          </Row>
          <Row>
            <Col className="col-12 col-sm-6">
              <MyButton
                className={cl("btn")}
                onClick={props.onHide}
                link={pathObj.list.path}
              >
                Tiếp tục mua hàng
              </MyButton>
            </Col>
            <Col className="col-12 col-sm-6">
              <MyButton
                className={cl("btn")}
                onClick={props.onHide}
                link={pathObj.shoppingCart.path}
              >
                Xem giỏ hàng
              </MyButton>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
}

ModalAddCart.propTypes = {
  props: PropTypes.object,
};
