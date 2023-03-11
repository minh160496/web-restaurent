import React, { useRef, useState } from "react";
import classNames from "classnames/bind";

import { useDebounce } from "hook";

import styles from "./Form.module.scss";

const cl = classNames.bind(styles);
export default function Form({
  classOfErr = "",
  classOfInput = "",
  classOfButton = "",
  valueButton = "Gửi",
  name,
  firstName,
  lastName,
  tel,
  email,
  password,
  repassword,
  textArea,
  handleDataForm = () => {},
}) {
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    password: "",
    confirmPassword: "",
    text: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    password: "",
    confirmPassword: "",
    text: "",
  });

  const validateField = (fieldName, fieldValue) => {
    let error = "";

    // Name validation
    if (name) {
      if (fieldName === "name") {
        if (!fieldValue.trim()) {
          error = "Vui lòng nhập tên của bạn";
        } else if (fieldValue.trim().length < 3) {
          error = "Tên phải có tối thiểu 3 ký tự";
        }
      }
    }

    // firstName validation
    if (firstName) {
      if (fieldName === "firstName") {
        if (!fieldValue.trim()) {
          error = "Vui lòng nhập Họ của bạn";
        } else if (fieldValue.trim().length < 2) {
          error = "Họ phải có tối thiểu 2 ký tự";
        }
      }
    }

    // firstName validation
    if (lastName) {
      if (fieldName === "lastName") {
        if (!fieldValue.trim()) {
          error = "Vui lòng nhập Tên của bạn";
        } else if (fieldValue.trim().length < 2) {
          error = "Tên phải có tối thiểu 2 ký tự";
        }
      }
    }

    // tel validation
    if (tel) {
      if (fieldName === "tel") {
        const patern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        if (!fieldValue.trim()) {
          error = "Vui lòng nhập số điện thoại của bạn";
        } else if (!patern.test(fieldValue.trim())) {
          error = "Số điện thoại không hợp lệ";
        }
      }
    }

    // Email validation
    if (email) {
      if (fieldName === "email") {
        if (!fieldValue.trim()) {
          error = "Vui lòng nhập email của bạn";
        } else if (!/\S+@\S+\.\S+/.test(fieldValue.trim())) {
          error = "Email không hợp lệ";
        }
      }
    }

    // Password validation
    if (password) {
      if (fieldName === "password") {
        if (!fieldValue.trim()) {
          error = "Vui lòng nhập mật khẩu";
        } else if (fieldValue.trim().length < 6) {
          error = "Mật khẩu phải có í nhất 6 ký tự";
        }
      }
    }

    // Confirm password validation
    if (repassword) {
      if (fieldName === "confirmPassword") {
        if (!fieldValue.trim()) {
          error = "Vui lòng xác nhận lại mật khẩu";
        } else if (fieldValue.trim() !== formData.password.trim()) {
          error = "Mật khẩu xác nhận không trùng khớp";
        }
      }
    }

    return error;
  };

  const handleDeboundErr = useDebounce((event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setFormErrors((prevState) => ({ ...prevState, [name]: error }));
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    handleDeboundErr(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    Object.keys(formData).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName]);

      //không có thông tin thì xóa trường đó đi
      if (!formData[fieldName]) delete formData[fieldName];
      if (error) {
        errors[fieldName] = error;
      }
    });
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      handleDataForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {name && (
        <div className={classOfInput + " " + cl("form__input")}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && (
            <div className={classOfErr + " " + cl("form-err")}>
              <span>{formErrors.name}</span>
            </div>
          )}
        </div>
      )}
      {firstName && (
        <div className={classOfInput + " " + cl("form__input")}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Họ"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {formErrors.firstName && (
            <div className={classOfErr + " " + cl("form-err")}>
              <span>{formErrors.firstName}</span>
            </div>
          )}
        </div>
      )}

      {lastName && (
        <div className={classOfInput + " " + cl("form__input")}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Tên"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {formErrors.lastName && (
            <div className={classOfErr + " " + cl("form-err")}>
              <span>{formErrors.lastName}</span>
            </div>
          )}
        </div>
      )}

      {tel && (
        <div className={classOfInput + " " + cl("form__input")}>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="Số điện thoại"
            value={formData.tel}
            onChange={handleInputChange}
          />
          {formErrors.tel && (
            <div className={classOfErr + " " + cl("form-err")}>
              <span>{formErrors.tel}</span>
            </div>
          )}
        </div>
      )}
      {email && (
        <div className={classOfInput + " " + cl("form__input")}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <div className={classOfErr + " " + cl("form-err")}>
              <span>{formErrors.email}</span>
            </div>
          )}
        </div>
      )}

      {password && (
        <div className={classOfInput + " " + cl("form__input")}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && (
            <div className={classOfErr + " " + cl("form-err")}>
              <span>{formErrors.password}</span>
            </div>
          )}
        </div>
      )}
      {repassword && (
        <div className={classOfInput + " " + cl("form__input")}>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formErrors.confirmPassword && (
            <div className={classOfErr + " " + cl("form-err")}>
              <span>{formErrors.confirmPassword}</span>
            </div>
          )}
        </div>
      )}

      {textArea && (
        <div className={classOfInput + " " + cl("form__input")}>
          <textarea
            rows="3"
            placeholder="Nhập thông tin"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
        </div>
      )}
      <div className={classOfButton + " " + cl("button")}>
        <button type="submit">{valueButton}</button>
      </div>
    </form>
  );
}
