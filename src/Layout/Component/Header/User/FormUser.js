import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";

import MyButton from "Component/MyButton";
import ButtonLogOut from "Component/ButtonLogOut";

import {
  listFootItem,
  listFootItemLogined,
} from "Layout/Component/Header/OffCanvas";
import { pathObj } from "Routers";
import { contextReRenderLayoutDefault } from "Layout/LayoutDefault";
import { contextReRenderLayoutNavBar } from "Layout/LayoutNavBar";
import { USER_LOGIN } from "CONST";

import styles from "./User.module.scss";

const cl = classNames.bind(styles);
export default function FormUser() {
  const reRenderLayoutDefault = useContext(contextReRenderLayoutDefault);
  const reRenderLayoutNavBar = useContext(contextReRenderLayoutNavBar);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const isLogin = !!localStorage.getItem(USER_LOGIN);
    setIsLogin(isLogin);
  }, [reRenderLayoutDefault, reRenderLayoutNavBar]);

  return (
    <div className={cl("form-user")}>
      <div className={cl("btn-wrapper")}>
        {isLogin &&
          listFootItemLogined.map((item, index) => (
            <div className={cl("btn-wrapper")} key={index}>
              {item.path !== pathObj.logOut.path && (
                <MyButton
                  className={cl("btn-user") + " items-center"}
                  link={item.path}
                >
                  <span>{item.fiel}</span>
                </MyButton>
              )}
              {item.path === pathObj.logOut.path && <ButtonLogOut />}
            </div>
          ))}

        {!isLogin &&
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
      </div>
    </div>
  );
}
