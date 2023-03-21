import React, { useContext, useEffect, useState } from "react";
import classnames from "classnames/bind";
import { NavLink } from "react-router-dom";

import Toolip from "Component/Toolip";
import PropperPC from "Component/PropperPC/PropperPC";
import FormUser from "./FormUser";
import { ReactComponent as IconUser } from "@/assets/icon/user.svg";
import { ReactComponent as IconLogin } from "@/assets/icon/login.svg";

import { contextReRenderLayoutDefault } from "Layout/LayoutDefault";
import { contextReRenderLayoutNavBar } from "Layout/LayoutNavBar";
import { pathObj } from "Routers";
import { USER_LOGIN } from "CONST";

import styles from "@/Layout/Component/Header/User/User.module.scss";

const cl = classnames.bind(styles);
export default function User() {
  const reRenderLayoutDefault = useContext(contextReRenderLayoutDefault);
  const reRenderLayoutNavBar = useContext(contextReRenderLayoutNavBar);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const isLogin = !!localStorage.getItem(USER_LOGIN);
    setIsLogin(isLogin);
  }, [reRenderLayoutDefault, reRenderLayoutNavBar]);
  return (
    <PropperPC mouseOver isMobileHidden content={<FormUser />}>
      <div className={cl("hidden-on-PC")}>
        <Toolip content="Giỏ hàng">
          <div className={cl("bag", "header__navbar__item") + " pos-relative"}>
            {!isLogin && (
              <NavLink
                className={({ isActive }) =>
                  isActive ? cl("active") : cl('"inactive"')
                }
                to={pathObj.logIn.path}
              >
                <div className={cl("icon", "icon-user")}>
                  <IconLogin fill="currentcolor" width={21} height={21} />
                </div>
              </NavLink>
            )}

            {isLogin && (
              <NavLink
                className={({ isActive }) =>
                  isActive ? cl("active") : cl('"inactive"')
                }
                to={pathObj.userInf.path}
              >
                <div className={cl("icon", "icon-user")}>
                  <IconUser fill="currentcolor" width={20} height={20} />
                </div>
              </NavLink>
            )}
          </div>
        </Toolip>
      </div>
    </PropperPC>
  );
}
