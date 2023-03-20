import React, { useRef, useState } from "react";
import classNames from "classnames/bind";

import MyButton from "Component/MyButton";
import ModalLoading from "Component/ModalLoading";
import { USER_LOGIN } from "CONST";

import styles from "./ButtonLogOut.module.scss";

const cl = classNames.bind(styles);
export default function ButtonLogOut({ text = false }) {
  const [modalShow, setModalShow] = useState(false);
  const anchorRef = useRef(null);
  const handleLogOut = () => {
    setModalShow(true);
    const timeOut = setTimeout(() => {
      setModalShow(false);
      localStorage.removeItem(USER_LOGIN);
      if (anchorRef && anchorRef.current) {
        anchorRef.current.click();
      }
      window.clearTimeout(timeOut);
    }, 2000);
  };

  return (
    <div className={cl("btn-logOut")}>
      {!text && (
        <MyButton className={cl("btn")} onClick={handleLogOut}>
          Đăng xuất
        </MyButton>
      )}
      {text && (
        <div className={cl("log-out")} onClick={handleLogOut}>
          <h2>Đăng xuất</h2>
        </div>
      )}
      <ModalLoading show={modalShow} onHide={() => setModalShow(false)} />
      <a href={"/"} ref={anchorRef}></a>
    </div>
  );
}
