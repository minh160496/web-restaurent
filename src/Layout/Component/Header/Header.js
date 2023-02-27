import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames/bind";
import { Container, Row } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import Toolip from "Component/Toolip";
import MyButton from "Component/MyButton";
import OfCanvas from "./OfCanvas";
import SearchMobile from "./SearchMobile/SearchMobile";
import logo from "@/assets/img/logo.webp";
import Img from "Component/Img";
import SearchPC from "./SearchPC/SearchPC";
import Bag from "./Bag";
import User from "./User";
import DropDown from "./DropDown/DropDown";
import { ReactComponent as IconArrowRight } from "src/assets/icon/arrowRight.svg";
import { ReactComponent as IconArrowLeft } from "src/assets/icon/arrowLeft.svg";
import { ReactComponent as IconMenu } from "assets/icon/menu.svg";
import { ReactComponent as IconMap } from "assets/icon/map.svg";
import { listBodyItem } from "./OfCanvas";

import styles from "./Header.module.scss";
import "./Tippy.scss";

const cl = classnames.bind(styles);
export default function Header({ homePage }) {
  //logic của offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //gan elementDOM heaer-wrapper và truyền cho component search để xử lý thêm overflow cho nó
  const headerWrapperRef = useRef();
  const searchRef = useRef();
  const [isMobile, setIsMobile] = useState(true);
  const [fixHeight, setFixHeight] = useState(true);

  //logic ẩn hiện ô search

  const handleToggerInputSearchMobile = () => {
    if (window.innerWidth <= 992) {
      setFixHeight((prevFixHeight) => !prevFixHeight);
    }
  };

  //logic không hiện ô inout trước khi height header dãn ra
  useEffect(() => {
    let timeOut;
    if (!fixHeight) {
      timeOut = setTimeout(() => {
        headerWrapperRef.current.style.overflow = "visible";
      }, 100);
    } else {
      headerWrapperRef.current.style.overflow = "hidden";
      window.clearTimeout(timeOut);
    }
  }, [fixHeight]);

  //xử lý remove onclick vào icon search hiện ô input
  const handleRemoveClickIconSearch = () => {
    if (window.innerWidth <= 992) {
      if (searchRef.current) {
        searchRef.current.addEventListener(
          "click",
          handleToggerInputSearchMobile
        );
      }
      setIsMobile(true);
    } else {
      if (searchRef.current) {
        searchRef.current.removeEventListener(
          "click",
          handleToggerInputSearchMobile
        );
      }
      setMarginUl(0);
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleRemoveClickIconSearch);
    searchRef.current.addEventListener("click", handleToggerInputSearchMobile);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      searchRef.current.removeEventListener(
        "click",
        handleToggerInputSearchMobile
      );
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

  return (
    <header
      className={cl(
        "header",
        { opacityPC: homePage ? true : false },
        "relative-z2-PC"
      )}
    >
      <Container>
        <Row>
          <div
            className={cl(
              "wrapper",
              {
                fixHeight: fixHeight ? true : false,
              },
              "visible-PC"
            )}
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
                          {!item.child && (
                            <Link to="/list">
                              <h3 className={cl("navbar__item__title")}>
                                {item.fiel}
                              </h3>
                            </Link>
                          )}
                          {item.child && (
                            <DropDown name={item.fiel} childList={item.child} />
                          )}
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
                  className={cl(
                    "search",
                    "header__navbar__item",
                    "item__search"
                  )}
                >
                  <SearchPC />
                </div>

                <div className={cl("item__bag")}>
                  <Bag />
                </div>
                <div className={cl("item__user")}>
                  <User />
                </div>

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

            <SearchMobile
              headerWrapperElement={headerWrapperRef.current}
              isMobile={isMobile}
            />
          </div>
        </Row>
      </Container>
    </header>
  );
}

Header.propTypes = {
  homePage: PropTypes.bool,
};
