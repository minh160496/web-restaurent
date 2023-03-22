import React from "react";
import classNames from "classnames/bind";
import Select from "react-select";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";

import styles from "./CheckOutForm.module.scss";

const cl = classNames.bind(styles);
export default function CheckOutForm() {
  const customClassNames = {
    control: ({ isFocused }) =>
      classNames(cl("select-control"), isFocused && cl("select-focus")),
    option: ({ isFocused, isSelected }) =>
      classNames(
        cl("select-option"),
        isSelected && cl("option-selected"),
        !isSelected && isFocused && cl("option-not-selected")
      ),
  };

  const provins = [
    {
      id: 1,
      name: "Hà Nội",
      codeName: "THN",
      districts: [
        {
          id: 1,
          name: "Hoàng Mai",
          codeName: "QHM",
          towns: [
            { id: 1, name: "Hoàng Liệt", codeName: "PHL" },
            { id: 2, name: "Giáp Bát", codeName: "PGB" },
            { id: 3, name: "Đại Kim", codeName: "PĐK" },
          ],
        },
        {
          id: 2,
          name: "Cầu Giấy",
          codeName: "QCG",
          towns: [
            { id: 1, name: "Dịch Vọng", codeName: "PDV" },
            { id: 2, name: "Dịch Vọng Hậu", codeName: "PDVH" },
            { id: 3, name: "Mai Dich", codeName: "PMG" },
          ],
        },
        {
          id: 3,
          name: "Nam Từ Liêm",
          codeName: "QNTL",
          towns: [
            { id: 1, name: "Cầu Diễn", codeName: "PCD" },
            { id: 2, name: "Mễ Trì", codeName: "PMT" },
            { id: 3, name: "Đại Mỗ", codeName: "PDM" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Hồ Chí Minh",
      codeName: "THCM",
      districts: [
        {
          id: 1,
          name: "Bình Thạnh",
          codeName: "QBT",
          towns: [
            { id: 1, name: "Phường 1", codeName: "P1" },
            { id: 2, name: "Phường 2", codeName: "P2" },
            { id: 3, name: "Phường 3", codeName: "P3" },
          ],
        },
        {
          id: 2,
          name: "Bình Tân",
          codeName: "QBT",
          towns: [
            { id: 1, name: "Bình Hưng Hòa", codeName: "PBHH" },
            { id: 2, name: "Bình Trị Đông", codeName: "PBTD" },
            { id: 3, name: "Tân Tạo", codeName: "PTT" },
          ],
        },
        {
          id: 3,
          name: "Vò Gấp",
          codeName: "QGV",
          towns: [
            { id: 1, name: "Phường 1", codeName: "P1" },
            { id: 2, name: "Phường 2", codeName: "P2" },
            { id: 3, name: "Phường 3", codeName: "P3" },
          ],
        },
      ],
    },
  ];

  const setOptionProvins = () => {
    const optionProvins = [];
    for (let i in provins) {
      const provin = { value: provins[i].codeName, label: provins[i].name };
      if (provin) {
        optionProvins.push(provin);
      }
    }
    return optionProvins;
  };
  const setOptionDistricts = (codeName) => {
    const provin = provins.find((provin) => provin.codeName === codeName);
    if (provin) {
      const optionDistricts = [];
      if (provin.districts) {
        const districts = provin.districts;
        for (let i in districts) {
          if (districts[i]) {
            const district = {
              value: districts[i].codeName,
              label: districts[i].name,
            };
            if (district) {
              optionDistricts.push(district);
            }
          }
        }
      }
      return optionDistricts;
    }
  };
  const setOptionTowns = (codeNameProvin, codeNameDistrict) => {
    if (codeNameProvin && codeNameDistrict) {
      const provinOption = provins.find(
        (provin) => provin.codeName === codeNameProvin
      );
      const districtOption = provinOption.districts.find(
        (district) => district.codeName === codeNameDistrict
      );
      const townList = districtOption.towns;
      const townOptions = [];
      for (let i in townList) {
        if (townList[i]) {
          const districtOption = {
            value: townList[i].codeName,
            label: townList[i].name,
          };
          townOptions.push(districtOption);
        }
      }
      return townOptions;
    }
  };
  const optionProvins = setOptionProvins();
  const optionDistricts = setOptionDistricts("THN");
  const optionTowns = setOptionTowns("THN", "QHM");
  console.log(optionTowns);

  return (
    <div className={cl("container")}>
      <div className={cl("title")}>
        <h1 className="stylized stylized-after title-big">Dream Restaurant</h1>
      </div>
      <Form className={cl("form")}>
        <div className={cl("form__main")}>
          <Container className="p-0">
            <Row>
              <Col className="col-12 col-md-7">
                <FormGroup className={cl("form-group")}>
                  <div className={cl("title")}>
                    <h2>Thông tin nhận hàng</h2>
                  </div>
                  <div className={cl("form__email", "form__item")}>
                    <input placeholder="Email" type="email" id="email" />
                    <span className={cl("error")}>Vui lòng</span>
                  </div>
                  <div className={cl("form__name", "form__item")}>
                    <input placeholder="Họ tên" type="text" id="name" />
                    <span className={cl("error")}>Vui lòng</span>
                  </div>
                  <div className={cl("form__tel", "form__item")}>
                    <input placeholder="Số điện thoại" type="tel" id="tel" />
                    <span className={cl("error")}>Vui lòng</span>
                  </div>
                  <div className={cl("form__provin", "form__item")}>
                    <Select
                      classNames={customClassNames}
                      placeholder="Chọn tỉnh thành"
                      options={optionProvins}
                    />
                    <span className={cl("error")}>Vui lòng</span>
                  </div>
                  <div className={cl("form__district", "form__item")}>
                    <Select
                      classNames={customClassNames}
                      placeholder="Chọn quận huyện"
                      isDisabled
                      options={optionDistricts}
                    />
                    <span className={cl("error")}>Vui lòng</span>
                  </div>
                  <div className={cl("form__town", "form__item")}>
                    <Select
                      classNames={customClassNames}
                      placeholder="Chọn xã phường"
                      isDisabled
                      options={null}
                    />
                    <span className={cl("error")}>Vui lòng</span>
                  </div>
                  <div className={cl("form__textarea", "form__item")}>
                    <textarea
                      rows="3"
                      placeholder="Chi tiết và lưu ý"
                    ></textarea>
                    <span className={cl("error")}>Vui lòng</span>
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
              </Col>
            </Row>
          </Container>
        </div>
      </Form>
    </div>
  );
}
