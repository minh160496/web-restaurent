import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";

import LayoutDefault from "Layout/LayoutDefault";
import Form from "Component/Form";
import ModalAlert from "Page/Login/ModalAlert";

import { pathObj } from "Routers";

import styles from "./OrderTable.module.scss";

const cl = classNames.bind(styles);
export default function OrderTable() {
  const [modalShow, setModalShow] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [name, setName] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [numPeoples, setNumPeoples] = useState(0);
  const handleConFirmTimeOrder = (data) => {
    setDataUser(data);
    setModalShow(true);
  };
  useEffect(() => {
    const name = dataUser ? dataUser.name : null;
    setName(name);
    const timeArr = dataUser.time ? dataUser.time.split(":") : [];
    const timeOrder = timeArr[0] + " giờ " + timeArr[1] + " phút";
    setTime(timeOrder);
    const dateArr = dataUser.date ? dataUser.date.split("-") : [];
    const dateOrder =
      "Ngày " + dateArr[2] + " tháng " + dateArr[1] + " năm " + dateArr[0];
    setDate(dateOrder);
    const numPeoples = dataUser.numPeoples ? dataUser.numPeoples : 0;
    setNumPeoples(numPeoples);
  }, [dataUser]);

  useEffect(() => {
    document.title = pathObj.orderTable.title;
  }, []);
  return (
    <div className={cl("order-table")}>
      <LayoutDefault path={pathObj.orderTable.path}>
        <div className={cl("main")}>
          <Container>
            <div className={cl("container-wrapper")}>
              <Row>
                <Col className="col-0 col-sm-1 col-md-2 col-xl-3"></Col>
                <Col className="col-12 col-sm-10 col-md-8 col-xl-6">
                  <div className={cl("form-wrapper")}>
                    <div className={cl("title")}>
                      <h1 className="stylized title-big stylized-after">
                        Liên hệ đặt bàn
                      </h1>
                    </div>
                    <div className={cl("form-main")}>
                      <Form
                        hasLabel
                        hasSaparate
                        name
                        email
                        tel
                        numPeoples
                        date
                        time
                        buttonCenter
                        valueButton="Đặt bàn"
                        handleDataForm={handleConFirmTimeOrder}
                      />
                    </div>
                  </div>
                </Col>
                <Col className="col-0 col-sm-1 col-md-2 col-xl-3"></Col>
              </Row>
            </div>
            <ModalAlert
              show={modalShow}
              onHide={() => setModalShow(false)}
              title="Đặt bàn thành công"
              content={
                "Khách hàng " +
                name +
                " đặt bàn " +
                numPeoples +
                " người lúc " +
                time +
                " " +
                date
              }
            />
          </Container>
        </div>
      </LayoutDefault>
    </div>
  );
}
