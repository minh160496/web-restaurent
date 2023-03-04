import React, { useState } from "react";
import classNames from "classnames/bind";
import { Offcanvas } from "react-bootstrap";

import Navigator from "Layout/Component/Navigator";
import { ReactComponent as IconClose } from "@/assets/icon/closeBold.svg";
import { ReactComponent as IconFilter } from "@/assets/icon/filter.svg";

import styles from "./NavOffCanvas.module.scss";

const cl = classNames.bind(styles);
export default function NavOffCanvas() {
  const [show, setShow] = useState(false);
  const [hasTranslateX, setHasTranslateX] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setHasTranslateX(true);
    setShow(true);
  };

  console.log(hasTranslateX);
  return (
    <div className={cl("navbar-offcanvas")}>
      <div className={cl("icon-filter-wrapper")} onClick={handleShow}>
        <IconFilter fill="currentcolor" />
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        placement="end"
        className={cl("offcanvas")}
        scroll={true}
      >
        <div className={cl("navbar-fixed")}>
          <div className={cl("icon-filter")} onClick={handleClose}>
            <IconClose fill="currentcolor" width={25} height={25} />
          </div>
          <Navigator />
        </div>
      </Offcanvas>
    </div>
  );
}
