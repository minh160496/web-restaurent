import React, { useState } from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

import MyButton from "Component/MyButton";
import logo from "src/assets/img/logo.webp";
import Img from "Component/Img";
import NavBarOnOfCanvas from "Component/NavOnBarOfCanvas";
import { ReactComponent as IconMenu } from "assets/icon/menu.svg";

import { listFootItem } from "./list";

import styles from "./OffCanvas.module.scss";

const cl = classNames.bind(styles);
export default function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={cl("navbar-wrapper-offcanvas")}>
      <MyButton
        transparent
        onClick={handleShow}
        floatLeft
        className={cl("menu")}
      >
        <IconMenu fill="currentcolor" width={20} height={20} />
      </MyButton>

      <Offcanvas
        scroll={true}
        backdrop={true}
        className={cl("offcanvas")}
        onHide={handleClose}
        show={show}
      >
        <div className={cl("offcanvas")}>
          <div className={cl("offcanvas")}>
            <div className={cl("ofcanvas__header")}>
              <div className={cl("ofcanvas-logo") + " margin-center"}>
                <Img src={logo} width="100%" heigh="auto" />
              </div>
            </div>

            <div className={cl("ofcanvas__body")}>
              <NavBarOnOfCanvas />
            </div>

            <div className={cl("ofcanvas__footer")}>
              <ul>
                {listFootItem.map((item, index) => (
                  <li key={index}>
                    <NavLink key={index} className="block" to={item.path}>
                      <div className={cl("ofcanvas__footer__item")}>
                        <h2 className={cl("item__title")}>{item.fiel}</h2>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}
