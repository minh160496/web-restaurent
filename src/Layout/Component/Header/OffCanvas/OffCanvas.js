import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

import MyButton from "Component/MyButton";
import logo from "src/assets/img/logo.jpg";
import Img from "Component/Img";
import NavBarOnOfCanvas from "Component/NavBarOnOfCanvas";
import { ReactComponent as IconMenu } from "assets/icon/menu.svg";

import { listFootItem, listFootItemLogined } from "./list";
import { contextReRenderLayoutDefault } from "Layout/LayoutDefault";
import { contextReRenderLayoutNavBar } from "Layout/LayoutNavBar";
import { USER_LOGIN } from "CONST";

import styles from "./OffCanvas.module.scss";
import { pathObj } from "Routers";
import ButtonLogOut from "Component/ButtonLogOut";

const cl = classNames.bind(styles);
export default function OffCanvas() {
  const [show, setShow] = useState(false);
  const [isLoginSucsess, setIsLoginSucsess] = useState(false);
  const reRenderLayoutDefault = useContext(contextReRenderLayoutDefault);
  const reRenderLayoutNavBar = useContext(contextReRenderLayoutNavBar);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const isLogin = !!localStorage.getItem(USER_LOGIN);
    setIsLoginSucsess(isLogin);
  }, [reRenderLayoutDefault, reRenderLayoutNavBar]);

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
                {!isLoginSucsess &&
                  listFootItem.map((item, index) => (
                    <li key={index}>
                      <NavLink key={index} className="block" to={item.path}>
                        <div className={cl("ofcanvas__footer__item")}>
                          <h2 className={cl("item__title")}>{item.fiel}</h2>
                        </div>
                      </NavLink>
                    </li>
                  ))}
                {isLoginSucsess &&
                  listFootItemLogined.map((item, index) => (
                    <li key={index}>
                      {item.path !== pathObj.logOut.path && (
                        <NavLink key={index} className="block" to={item.path}>
                          <div className={cl("ofcanvas__footer__item")}>
                            <h2 className={cl("item__title")}>{item.fiel}</h2>
                          </div>
                        </NavLink>
                      )}

                      {item.path === pathObj.logOut.path && (
                        <ButtonLogOut text />
                      )}
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
