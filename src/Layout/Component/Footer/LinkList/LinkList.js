import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import { listInstruct, listPolicy } from "./list";

import styles from "./LinkList.module.scss";

const cl = classNames.bind(styles);
export default function LinkList() {
  return (
    <div className={cl("link-list")}>
      <Container>
        <Row className="p-0">
          <div className="col-6">
            <div className={cl("link-list__item")}>
              <div className={cl("item__title")}>
                <h3>HƯỚNG DẪN</h3>
              </div>
              <div className={cl("item__list")}>
                <ul>
                  {listInstruct.map((item, index) => (
                    <li key={index}>
                      <Link to="/">{item.fiel}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className={cl("link-list__item")}>
              <div className={cl("item__title")}>
                <h3>CHÍNH SÁCH</h3>
              </div>
              <div className={cl("item__list")}>
                <ul>
                  {listPolicy.map((item, index) => (
                    <li key={index}>
                      <Link to="#">{item.fiel}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
