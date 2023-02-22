import React from "react";
import classnames from "classnames/bind";

import Toolip from "Component/Toolip";
import PropperPC from "Component/PropperPC/PropperPC";
import { ReactComponent as IconUser } from "@/assets/icon/user.svg";
import FormUser from "./FormUser";

import styles from "@/Layout/Component/Header/User/User.module.scss";

const cl = classnames.bind(styles);
export default function User() {
  return (
    <PropperPC mouseOver isMobileHidden content={<FormUser />}>
      <div className={cl("hidden-on-PC")}>
        <Toolip content="Giỏ hàng">
          <div className={cl("bag", "header__navbar__item") + " pos-relative"}>
            <div className={cl("icon", "icon-user")}>
              <IconUser fill="currentcolor" width={20} height={20} />
            </div>
          </div>
        </Toolip>
      </div>
    </PropperPC>
  );
}
