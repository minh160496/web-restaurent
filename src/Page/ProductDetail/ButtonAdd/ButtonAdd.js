import React, { useContext } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import MyButton from "Component/MyButton";

import { CART_NUM, USER_LOGIN } from "CONST";
import { contextReRenderLayoutDefault } from "Layout/LayoutDefault";
import { contextReRenderLayoutNavBar } from "Layout/LayoutNavBar";
import { pathObj } from "Routers";

import styles from "./ButtonAdd.module.scss";

const cl = classNames.bind(styles);
export default function ButtonAdd(props) {
  const reRenderLayoutDefaultObj = useContext(contextReRenderLayoutDefault);
  const reRenderLayoutNavBarObj = useContext(contextReRenderLayoutNavBar);
  const handleReRenderLayoutDefault = reRenderLayoutDefaultObj
    ? reRenderLayoutDefaultObj.func
    : () => {};
  const handleReRenderLayoutNavBar = reRenderLayoutNavBarObj
    ? reRenderLayoutNavBarObj.func
    : () => {};
  const isLogin = !!localStorage.getItem(USER_LOGIN);
  const handleClickAddToCart = () => {
    if (isLogin) {
      const cartNum = JSON.parse(localStorage.getItem(CART_NUM));
      const newCartNum = {
        ...cartNum,
        [props.id]: {
          ...cartNum[props.id],
          isToCart: true,
        },
      };
      localStorage.setItem(CART_NUM, JSON.stringify(newCartNum));
      handleReRenderLayoutDefault();
      handleReRenderLayoutNavBar();
      props.onClick();
    }
  };
  return (
    <MyButton
      {...props}
      onClick={handleClickAddToCart}
      link={isLogin ? "#" : pathObj.logIn.path}
    >
      Thêm vào giỏ hàng
    </MyButton>
  );
}

ButtonAdd.propTypes = {
  props: PropTypes.object,
};
