import React from "react";
import classNames from "classnames/bind";
import Modal from "react-bootstrap/Modal";

import Loading from "Component/Animation/Loading";

import styles from "./ModalLoading.module.scss";

const cl = classNames.bind(styles);
export default function ModalLoading(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={cl("content")}
      animation={false}
    >
      <Modal.Body className={cl("body")}>
        <Loading />
      </Modal.Body>
    </Modal>
  );
}
