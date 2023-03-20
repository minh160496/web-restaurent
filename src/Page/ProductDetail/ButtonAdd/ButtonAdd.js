import React, { useContext, useRef, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import MyButton from "Component/MyButton";
import ModalAddCart from "../ModalAddCart";
import { ReactComponent as IconBag } from "assets/icon/bagFill.svg";

import { CART_NUM, USER_LOGIN } from "CONST";
import { contextReRenderLayoutDefault } from "Layout/LayoutDefault";
import { contextReRenderLayoutNavBar } from "Layout/LayoutNavBar";
import { pathObj } from "Routers";

import styles from "./ButtonAdd.module.scss";

const cl = classNames.bind(styles);
export default function ButtonAdd(props) {
  const anchorRef = useRef(null);
  const [modalShow, setModalShow] = useState(false);
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
      setModalShow(true);
    } else {
      if (anchorRef && anchorRef.current) {
        anchorRef.current.click();
      }
    }
  };

  const handleClickAddToCartFast = () => {
    if (isLogin) {
      const cartNum = JSON.parse(localStorage.getItem(CART_NUM));
      const newCartNum = {
        ...cartNum,
        [props.id]: {
          ...cartNum[props.id],
          value: 1,
          isToCart: true,
        },
      };
      localStorage.setItem(CART_NUM, JSON.stringify(newCartNum));
      handleReRenderLayoutDefault();
      handleReRenderLayoutNavBar();
      setModalShow(true);
    }
  };
  return (
    <>
      {!props.isIcon && (
        <>
          <MyButton {...props} onClick={handleClickAddToCart}>
            Thêm vào giỏ hàng
          </MyButton>
          <a
            href={pathObj.logIn.path}
            ref={anchorRef}
            style={{ width: 0, height: 0 }}
          ></a>
        </>
      )}

      {props.isIcon && (
        <div className={cl("icon-cart")} onClick={handleClickAddToCartFast}>
          <IconBag fill="currentcolor" width={20} height={20} />
        </div>
      )}
      <ModalAddCart
        id={props.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

ButtonAdd.propTypes = {
  props: PropTypes.object,
};
