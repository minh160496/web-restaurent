import React from "react";
import classNames from "classnames/bind";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./ModalProduct.module.scss";
import Img from "Component/Img";
import ChooseQuanlity from "Component/ChooseQuanlity";
import ButtonAdd from "Page/ProductDetail/ButtonAdd";

import { handleUnitMoney } from "Component/CalculatorTotal";

const cl = classNames.bind(styles);
export default function ModalProduct(props) {
  const product = props.product ? props.product : {};
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={cl("modal")}
    >
      <Modal.Header closeButton className={cl("header")}>
        <Modal.Title id="contained-modal-title-vcenter" className={cl("title")}>
          Thông tin cơ bản của món ăn
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={cl("body")}>
        <Container className="p-0">
          <Row>
            <Col className="col-6">
              <div className={cl("image")}>
                <Img src={product.src} width={"100%"} heigh={"auto"} />
              </div>
            </Col>
            <Col className="col-6">
              <div className={cl("text")}>
                <div className={cl("name")}>
                  <h2>{product.name}</h2>
                </div>
                <div className={cl("price")}>
                  <span>{handleUnitMoney(product.price + "000")}</span>
                </div>
                <div className={cl("chosee-quanlity")}>
                  <span>Số lượng:</span>
                  <ChooseQuanlity id={product.id || 1} isToCart={false} />
                </div>
                <div className={cl("add-cart")}>
                  <ButtonAdd className={cl("btn-add")} id={product.id} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

ModalProduct.propTypes = {
  props: PropTypes.object,
};
