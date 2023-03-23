import React, { useState } from "react";
import classNames from "classnames/bind";
import Select from "react-select";
import PropTypes from "prop-types";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";

import { useDebounce } from "hook";
import {
  createOptionProvins,
  createOptionDistricts,
  createOptionTowns,
} from "./ultil/createOptionAddress";
import { customClassNames } from "./ultil/customStylesSelect";

import styles from "./CheckOutForm.module.scss";

const cl = classNames.bind(styles);
export default function CheckOutForm({ handleFormCheckOutData = () => {} }) {
  //logic validate form
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    provin: "",
    district: "",
    town: "",
    comment: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    tel: "",
    provin: "",
    district: "",
    town: "",
    comment: "",
  });

  const [optionProvins, setOptionProvins] = useState(createOptionProvins());
  const [optionDistricts, setOptionDistricts] = useState(null);
  const [optionTowns, setOptionTowns] = useState(null);

  const validate = (fielName, fielValue) => {
    let error;
    if (fielName === "name") {
      if (!fielValue.trim()) {
        error = "Vui lòng nhập họ tên";
      } else {
        if (fielValue.trim().length < 3) {
          error = "Họ tên phải có ít nhất 3 ký tự";
        }
      }
    }

    if (fielName === "tel") {
      const patern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      if (!fielValue.trim()) {
        error = "Vui lòng nhập số điện thoại của bạn";
      } else if (!patern.test(fielValue.trim())) {
        error = "Số điện thoại không hợp lệ";
      }
    }

    if (fielName === "comment") {
      if (!fielValue.trim()) {
        error = "Vui lòng nhập địa chỉ cụ thể";
      }
    }

    if (fielName === "provin") {
      if (!fielValue) {
        error = "Vui lòng chọn tỉnh thành của bạn";
      }
    }

    if (fielName === "district") {
      if (!fielValue) {
        error = "Vui lòng chọn huyện hoặc quận của bạn";
      }
    }

    if (fielName === "town") {
      if (!fielValue) {
        error = "Vui lòng chọn xã hoặc phường của bạn";
      }
    }
    return error;
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value ? value : "",
    }));
    handleShowError(e);
  };

  const handleShowError = useDebounce((e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error ? error : "" }));
  });

  const handleChangeSelect = (option) => {
    const { value, name } = option;
    const error = validate(name, value);
    setFormData((prev) => ({ ...prev, [name]: option ? option : "" }));
    setFormErrors((prev) => ({ ...prev, [name]: error ? error : "" }));
    if (name === "provin" && value) {
      //khi chọn tỉnh thì huyện xã về null để disable
      setOptionDistricts(createOptionDistricts(value));
      setFormData((prev) => ({ ...prev, district: "", town: "" }));
    }
    if (name === "district" && value) {
      //khi chọn huyện thì xã null để disable
      setFormData((prev) => ({ ...prev, town: "" }));
      if (formData.provin && formData.provin.value) {
        setOptionTowns(createOptionTowns(formData.provin.value, value));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((fielName) => {
      const error = validate(fielName, formData[fielName]);
      errors[fielName] = error ? error : "";
    });
    setFormErrors(errors);
    if (!Object.keys(errors).some((name) => errors[name])) {
      handleFormCheckOutData(formData);
    }
  };

  return (
    <div className={cl("container")}>
      <div className={cl("title")}>
        <h1 className="stylized stylized-after title-big">Dream Restaurant</h1>
      </div>
      <Form className={cl("form")} onSubmit={handleSubmit}>
        <div className={cl("form__main")}>
          <Container className="p-0">
            <Row>
              <Col className="col-12 col-md-7">
                <FormGroup className={cl("form-group")}>
                  <div className={cl("title")}>
                    <h2>Thông tin nhận hàng</h2>
                  </div>

                  <div className={cl("form__name", "form__item")}>
                    <input
                      placeholder="Họ tên"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(option) => handleChangeInput(option)}
                    />
                    {formErrors.name && (
                      <span className={cl("error")}>{formErrors.name}</span>
                    )}
                  </div>
                  <div className={cl("form__tel", "form__item")}>
                    <input
                      placeholder="Số điện thoại"
                      type="tel"
                      id="tel"
                      name="tel"
                      value={formData.tel}
                      onChange={(e) => handleChangeInput(e)}
                    />
                    {formErrors.tel && (
                      <span className={cl("error")}>{formErrors.tel}</span>
                    )}
                  </div>
                  <div className={cl("form__provin", "form__item")}>
                    <Select
                      classNames={customClassNames}
                      name="provin"
                      placeholder="Chọn tỉnh thành"
                      options={optionProvins}
                      value={formData.provin}
                      onChange={(e) => handleChangeSelect(e)}
                    />
                    {formErrors.provin && (
                      <span className={cl("error")}>{formErrors.provin}</span>
                    )}
                  </div>
                  <div className={cl("form__district", "form__item")}>
                    <Select
                      classNames={customClassNames}
                      placeholder="Chọn quận huyện"
                      options={optionDistricts}
                      isDisabled={!optionDistricts}
                      value={formData.district}
                      onChange={(e) => handleChangeSelect(e)}
                    />
                    {formErrors.district && (
                      <span className={cl("error")}>{formErrors.district}</span>
                    )}
                  </div>
                  <div className={cl("form__town", "form__item")}>
                    <Select
                      classNames={customClassNames}
                      placeholder="Chọn xã phường"
                      options={optionTowns}
                      isDisabled={!optionTowns}
                      value={formData.town}
                      onChange={(e) => handleChangeSelect(e)}
                    />
                    {formErrors.town && (
                      <span className={cl("error")}>{formErrors.town}</span>
                    )}
                  </div>
                  <div className={cl("form__textarea", "form__item")}>
                    <textarea
                      rows="3"
                      placeholder="Địa chỉ cụ thể: Số nhà, tên đường"
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={(e) => handleChangeInput(e)}
                    ></textarea>
                    {formErrors.comment && (
                      <span className={cl("error")}>{formErrors.comment}</span>
                    )}
                  </div>
                </FormGroup>
              </Col>
              <Col className="col-12 col-md-5">
                <FormGroup className={cl("form-group")}>
                  <div className={cl("title")}>
                    <h2>Vận chuyển</h2>
                  </div>
                  <div className={cl("form__ship", "form__item")}>
                    <input type="radio" id="ship" name="ship" />
                    <label htmlFor="ship">Giao hàng tận nơi</label>
                  </div>
                </FormGroup>
                <FormGroup className={cl("form-group")}>
                  <div className={cl("title")}>
                    <h2>Hình thức thanh toán</h2>
                  </div>
                  <div className={cl("form__pay", "form__item")}>
                    <input type="radio" id="pay" name="pay" />
                    <label htmlFor="pay">Thanh toán khi nhận hàng</label>
                  </div>
                </FormGroup>
                <button type="submit">Gửi</button>
              </Col>
            </Row>
          </Container>
        </div>
      </Form>
    </div>
  );
}

CheckOutForm.propTypes = {
  handleFormCheckOutData: PropTypes.func,
};
