import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import Toolip from "Component/Toolip";
import MyButton from "Component/MyButton";
import OffCanvas from "./OffCanvas";
import SearchMobile from "./SearchMobile";
import logo from "@/assets/img/logo.webp";
import Img from "Component/Img";
import SearchPC from "./SearchPC/SearchPC";
import Bag from "./Bag";
import User from "./User";
import NavBarItemHasDrop from "./NavBarItemHasDropPC";
import ScrollX from "./ScrollX";
import DropDown from "./DropDown";
import { ReactComponent as IconMap } from "assets/icon/map.svg";
import { listBodyItem } from "./OffCanvas";

import "./Tippy.scss";

import styles from "./Header.module.scss";

const cl = classnames.bind(styles);
export default function Header({ isHomePage }) {
  //gan elementDOM heaer-wrapper và truyền cho component search để xử lý thêm overflow cho nó
  const headerWrapperRef = useRef();
  const searchRef = useRef();
  const [isMobile, setIsMobile] = useState(true);
  const [fixHeight, setFixHeight] = useState(true);
  const [arrowFade, setArrowFade] = useState(false);
  const [hasDrop, setHasDrop] = useState(false);
  const [drop, setDrop] = useState(null);
  const ulRef = useRef(null);
  const wrapperNavBarPCRef = useRef(null);

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
    if (marginUl > -250) {
      setMarginUl((prev) => prev - 102);
    }
  };

  const handleArrowHeader = () => {
    if (wrapperNavBarPCRef.current.clientWidth >= ulRef.current.clientWidth) {
      setArrowFade(false);
    } else {
      setArrowFade(true);
    }
  };

  useEffect(() => {
    handleArrowHeader();
    window.addEventListener("resize", handleArrowHeader);
    return () => window.removeEventListener("resize", handleArrowHeader);
  }, []);

  const handeFadeDrop = (id) => {
    setDrop(id);
  };

  return (
    <header
      className={cl(
        "header",
        { opacityPC: isHomePage ? true : false },
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
                <OffCanvas />

                <div className={cl("header__navbar__item", "logo")}>
                  <Img src={logo} width="100%" heigh="auto" minWidth="130px" />
                </div>
                <div
                  className={
                    cl("header__navbar__item", "menu-list-pc") +
                    " flex align-center"
                  }
                >
                  <div
                    className={cl("wrapper-navbarPC")}
                    ref={wrapperNavBarPCRef}
                  >
                    <ul
                      ref={ulRef}
                      className="flex align-center"
                      style={{ marginLeft: marginUl }}
                    >
                      {listBodyItem.map((item, index) => (
                        <li key={index}>
                          {!item.child && (
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? cl("active") : cl('"inactive"')
                              }
                              to={item.path}
                            >
                              <h3 className={cl("navbar__item__title")}>
                                {item.fiel}
                              </h3>
                            </NavLink>
                          )}
                          {item.child && (
                            <div
                              onMouseOver={() => {
                                setHasDrop(true);
                                handeFadeDrop(item.id);
                              }}
                              onMouseOut={() => setHasDrop(false)}
                            >
                              <NavLink to={item.path}>
                                <NavBarItemHasDrop
                                  name={item.fiel}
                                  hasMouseOverDrop={hasDrop}
                                />
                              </NavLink>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>

                    {arrowFade && (
                      <ScrollX
                        onClickRight={handleFadeRight}
                        onClickLeft={handleFadeLeft}
                      />
                    )}
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

            {hasDrop &&
              listBodyItem
                .filter((item) => item.child && item.id == drop)
                .map((item, index) => (
                  <div
                    className={cl("dropdown")}
                    key={index}
                    onMouseOver={() => {
                      setHasDrop(true);
                      setDrop(item.id);
                    }}
                    onMouseOut={() => setHasDrop(false)}
                  >
                    <DropDown ID={item.id} />
                  </div>
                ))}

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
  isHomePage: PropTypes.bool,
};
