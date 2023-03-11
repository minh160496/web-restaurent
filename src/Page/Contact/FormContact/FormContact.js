import React from "react";
import classNames from "classnames/bind";

import Form from "Component/Form";

import { CONTACT } from "CONST";

import styles from "./FormContact.module.scss";

const cl = classNames.bind(styles);
export default function FormContact() {
  const handleDataForm = (data) => {
    const dataJson = JSON.stringify(data);
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
      </div>
    </div>
  );
}
