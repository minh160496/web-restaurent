import React, { useState, useRef, useCallback, useEffect } from "react";
import classnames from "classnames/bind";
import { Container, Row } from "react-bootstrap";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "./Tippy.scss";
import { Offcanvas } from "react-bootstrap";

import MyButton from "Component/MyButton";
import BagNumber from "./BagNumber";
import styles from "./Header.module.scss";
import "./Tippy.scss";
import Toolip from "Component/Toolip";
import OfCanvas from "./OfCanvas";
import { ReactComponent as IconMenu } from "assets/icon/menu.svg";
import { ReactComponent as IconSearch } from "assets/icon/search.svg";
import { ReactComponent as IconBag } from "assets/icon/bag.svg";
import { ReactComponent as IconMap } from "assets/icon/map.svg";
import Search from "./Search";
import Img from "Component/Img";
import logo from "@/assets/img/logo.webp";
import { listBodyItem } from "./OfCanvas";
import { Link } from "react-router-dom";
import { ReactComponent as IconArrowRight } from "src/assets/icon/arrowRight.svg";
import { ReactComponent as IconArrowLeft } from "src/assets/icon/arrowLeft.svg";

const cl = classnames.bind(styles);
export default function Header() {
  //logic của offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const searchRef = useRef();

  //logic ẩn hiện ô search
  const [fixHeight, setFixHeight] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", handleRemoveClickIconSearch);
    searchRef.current.addEventListener("click", handleToggerInputSearch);
  }, []);
  const handleToggerInputSearch = () => {
    if (window.innerWidth <= 992) {
      setFixHeight((prevFixHeight) => !prevFixHeight);
      headerWrapperRef.current.style.overflow = "hidden";
    }
  };

  //xử lý remove onclick vào icon search hiện ô input
  const handleRemoveClickIconSearch = () => {
    if (window.innerWidth <= 992) {
      searchRef.current.addEventListener("click", handleToggerInputSearch);
    } else {
      searchRef.current.removeEventListener("click", handleToggerInputSearch);
      setMarginUl(0);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 992) {
      searchRef.current.removeEventListener("click", handleToggerInputSearch);
    }
  }, []);

  //logic xử lý trượt menu-pc item
  const [marginUl, setMarginUl] = useState(0);
  const handleFadeLeft = () => {
    if (marginUl < 0) {
      setMarginUl((prev) => prev + 102);
    }
  };
  const handleFadeRight = () => {
    if (marginUl > -204) {
      setMarginUl((prev) => prev - 102);
    }
  };

  //gan elementDOM heaer-wrapper và truyền cho component search để xử lý thêm overflow cho nó
  const headerWrapperRef = useRef();
  return (
    <header className={cl("header")}>
      <Container>
        <Row>
          <div
            className={cl("wrapper", {
              fixHeight: fixHeight ? true : false,
            })}
            ref={headerWrapperRef}
          >
            <div className={cl("header__navbar") + " flex justify-between"}>
              <div className={cl("header__navbar-text")}>
                <div className={cl("navbar-wrapper-menu")}>
                  <MyButton
                    transparent
                    onClick={handleShow}
                    floatLeft
                    className={cl("menu")}
                  >
                    <IconMenu fill="currentcolor" width={20} height={20} />
                  </MyButton>

                  <Offcanvas
                    show={show}
                    onHide={handleClose}
                    className={cl("ofcanvas")}
                  >
                    <OfCanvas />
                  </Offcanvas>
                </div>
                <div className={cl("header__navbar__item", "logo")}>
                  <Img src={logo} width="100%" heigh="auto" minWidth="130px" />
                </div>
                <div
                  className={
                    cl("header__navbar__item", "menu-list-pc") +
                    " flex align-center"
                  }
                >
                  <div className={cl("wrapper-navbarPC")}>
                    <ul
                      className="flex align-center"
                      style={{ marginLeft: marginUl }}
                    >
                      {listBodyItem.map((item, index) => (
                        <li key={index}>
                          <Link to="/">
                            <h3 className={cl("navbar__item__title")}>
                              {item.fiel}
                            </h3>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={
                        cl("navbar__item__arrow") + " flex pos-absolute"
                      }
                    >
                      <div
                        className={cl("arrow", "arrow-left", "icon")}
                        onClick={handleFadeLeft}
                      >
                        <IconArrowLeft
                          fill="currentcolor"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div
                        className={cl("arrow", "arrow-right", "icon")}
                        onClick={handleFadeRight}
                      >
                        <IconArrowRight
                          fill="currentcolor"
                          with={20}
                          heigh={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cl("header__navbar-icon") + " flex align-center"}>
                <div
                  ref={searchRef}
                  className={cl("search", "header__navbar__item")}
                >
                  <div className={cl("icon")}>
                    <IconSearch fill="currentcolor" width={20} height={20} />
                  </div>
                </div>

                <Toolip content="Giỏ hàng">
                  <div
                    className={
                      cl("bag", "header__navbar__item") + " pos-relative"
                    }
                  >
                    <div className={cl("icon")}>
                      <IconBag fill="currentcolor" width={20} height={20} />
                    </div>
                    <BagNumber number={2} />
                  </div>
                </Toolip>

                <Toolip content="Hệ thống cửa hàng">
                  <div className={cl("map", "header__navbar__item")}>
                    <div className={cl("icon")}>
                      <IconMap fill="currentcolor" width={20} height={20} />
                    </div>
                  </div>
                </Toolip>
                <Toolip
                  content="Đặt bàn"
                  place="bottom-end"
                  className="toolip-order"
                >
                  <div className={cl("header__button", "header__navbar__item")}>
                    <MyButton sizeXL>Đặt bàn</MyButton>
                  </div>
                </Toolip>
              </div>
            </div>

            <Search headerWrapperElement={headerWrapperRef.current} />
          </div>
        </Row>
      </Container>
    </header>
  );
}
