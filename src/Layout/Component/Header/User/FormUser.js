import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";

import MyButton from "Component/MyButton";

import {
  listFootItem,
  listFootItemLogined,
} from "Layout/Component/Header/OffCanvas";

import { pathObj } from "Routers";
import { contextReRenderLayoutDefault } from "Layout/LayoutDefault";
import { contextReRenderLayoutNavBar } from "Layout/LayoutNavBar";
import { USER_LOGIN } from "CONST";

import styles from "./User.module.scss";
import Loading from "Component/Animation/Loading";

const cl = classNames.bind(styles);
export default function FormUser() {
  const [isWait, setIsWait] = useState(false);
  const reRenderLayoutDefault = useContext(contextReRenderLayoutDefault);
  const handleReRenderDefault = reRenderLayoutDefault
    ? reRenderLayoutDefault.func
    : () => {};
  const reRenderLayoutNavBar = useContext(contextReRenderLayoutNavBar);
  const handleReRenderNavBar = reRenderLayoutNavBar
    ? reRenderLayoutNavBar.func
    : () => {};

  const [isLogin, setIsLogin] = useState(false);
  const handleClickButton = (fiel) => {
    if (fiel === pathObj.logOut.title) {
      setIsWait(true);
      localStorage.removeItem(USER_LOGIN);
      const timeOut = setTimeout(() => {
        setIsWait(false);
        handleReRenderDefault();
        handleReRenderNavBar();
      }, 2000);
    }
  };
  useEffect(() => {
    const isLogin = !!localStorage.getItem(USER_LOGIN);
    setIsLogin(isLogin);
  }, [reRenderLayoutDefault, reRenderLayoutNavBar]);

  return (
    <div className={cl("form-user")}>
      <div className={cl("btn-wrapper")}>
        {isLogin &&
          !isWait &&
          listFootItemLogined.map((item, index) => (
            <div className={cl("btn-wrapper")} key={index}>
              <MyButton
                onClick={() => handleClickButton(item.fiel)}
                className={cl("btn-user") + " items-center"}
                link={item.path !== pathObj.logOut.path ? item.path : "#"}
              >
                <span>{item.fiel}</span>
              </MyButton>
            </div>
          ))}

        {!isLogin &&
          !isWait &&
          listFootItem.map((item, index) => (
            <div className={cl("btn-wrapper")} key={index}>
              <MyButton
                className={cl("btn-user") + " items-center"}
                link={item.path}
              >
                <span>{item.fiel}</span>
              </MyButton>
            </div>
          ))}

        {isWait && (
          <div className={cl("loading")}>
            <Loading them="black" />
            <a href="/"></a>
          </div>
        )}
      </div>
    </div>
  );
}
