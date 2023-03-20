import React from "react";
import classNames from "classnames/bind";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

import MyButton from "Component/MyButton";
import { ReactComponent as IconSucsess } from "assets/icon/sucsess.svg";
import { ReactComponent as IconSad } from "assets/icon/sad.svg";

import styles from "./ModalAlert.module.scss";

const cl = classNames.bind(styles);
export default function ModalAlert({
  className = "",
  error,
  link,
  title,
  content,
  valueButton,
  show,
  onHide = () => {},
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      className={className}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={cl("header", { sucsess: !error })}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="flex align-center"
        >
          <div className={cl("icon-sad")}>
            {error && <IconSad fill="currentcolor" width={30} height={30} />}
            {!error && (
              <IconSucsess fill="currentcolor" width={30} height={30} />
            )}
          </div>
          <div className={cl("title")}>
            <span>{title || "Tiêu đề"}</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={cl("body")}>
        <span>{content || "Nội dung thông báo"}</span>
        {link && (
          <MyButton
            onClick={onHide}
            className={cl("confirm")}
            link={link || "#"}
          >
            {valueButton || "Xác nhận"}
          </MyButton>
        )}
        {!link && (
          <MyButton onClick={onHide} className={cl("confirm")}>
            {valueButton || "Xác nhận"}
          </MyButton>
        )}
      </Modal.Body>
    </Modal>
  );
}

ModalAlert.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  link: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  valueButton: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
};
