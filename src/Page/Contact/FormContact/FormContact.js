import React from "react";
import classNames from "classnames/bind";

import Form from "Component/Form";
import ModalAlert from "Page/Login/ModalAlert";

import { CONTACT } from "CONST";

import styles from "./FormContact.module.scss";

const cl = classNames.bind(styles);
export default function FormContact() {
  const [modalShow, setModalShow] = React.useState(false);
  const handleDataForm = (data) => {
    const dataJson = JSON.stringify(data);
    setModalShow(true);
    localStorage.setItem(CONTACT, dataJson);
  };

  return (
    <div className={cl("form-contact")}>
      <div className={cl("form__title")}>
        <h2>Liên Hệ với chúng tôi</h2>
      </div>
      <div className={cl("form__main")}>
        <Form
          name
          email
          tel
          textArea
          valueButton="Gửi thông tin"
          handleDataForm={handleDataForm}
        />
        <ModalAlert
          title="Gửi thông tin thành công"
          content="Cảm ơn bạn chúng tôi sẽ ghi nhận phản hồi và sớm liên hệ lại với bạn"
          valueButton="Xác nhận"
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}
