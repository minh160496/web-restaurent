import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

import BagNumber from "./BagNumber";
import Toolip from "Component/Toolip";
import PropperPC from "Component/PropperPC/PropperPC";
import MainShoppingCart from "Component/ShoppingCart/MainShoppingCart";
import { ReactComponent as IconBag } from "@/assets/icon/bag.svg";

import { pathObj } from "Routers";

import styles from "@/Layout/Component/Header/Bag/Bag.module.scss";

const cl = classnames.bind(styles);
export default function Bag() {
  return (
    <PropperPC mouseOver isMobileHidden content={<MainShoppingCart isMini />}>
      <Toolip content="Giỏ hàng" className={cl("hidden-on-PC")}>
        <Link to={pathObj.shoppingCart.path}>
          <div className={cl("bag", "header__navbar__item") + " pos-relative"}>
            <div className={cl("icon", "icon-bag")}>
              <IconBag fill="currentcolor" width={20} height={20} />
            </div>
            <BagNumber />
          </div>
        </Link>
      </Toolip>
    </PropperPC>
  );
}
