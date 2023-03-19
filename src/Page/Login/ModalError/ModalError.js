import React from "react";
import classNames from "classnames/bind";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

import { ReactComponent as IconSad } from "assets/icon/sad.svg";

import styles from "./ModalError.module.scss";

const cl = classNames.bind(styles);
export default function ModalError(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={cl("header")}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="flex align-center"
        >
          <div className={cl("icon-sad")}>
            <IconSad fill="currentcolor" width={30} height={30} />
          </div>
          <div className={cl("title")}>
            <span>Đăng nhập thất bại</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={cl("body")}>
        <span>Thông tin email hoặc mật khẩu không chính xác</span>
      </Modal.Body>
    </Modal>
  );
}

ModalError.propTypes = {
  props: PropTypes.object,
};
