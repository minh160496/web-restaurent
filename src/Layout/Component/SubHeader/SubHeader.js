import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { ReactComponent as IconArrowRight } from "@/assets/icon/arrowRight.svg";

import styles from "./SubHeader.module.scss";

const cl = classNames.bind(styles);
export default function SubHeader() {
  return (
    <nav className={cl("sub-header")}>
      <Container>
        <div className={cl("sub-header-content") + " flex align-center"}>
          <ul className="flex align-center">
            <li>
              <Link to="/">
                <span className={cl("content__item")}>Trang chủ</span>
              </Link>
            </li>
            <li>
              <div className={cl("icon")}>
                <IconArrowRight fill="currentcolor" width={10} height={10} />
              </div>
            </li>
            <li>
              <Link to="/">
                <span className={cl("content__item")}>Món ăn yêu thích</span>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
