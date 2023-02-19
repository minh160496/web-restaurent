import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./OfCanvas.module.scss";
import { listBodyItem, listFootItem } from "./list";
import logo from "src/assets/img/logo.webp";
import Img from "Component/Img";

const cl = classNames.bind(styles);
export default function OfCanvas() {
  return (
    <div className={cl("ofcanvas")}>
      <div className={cl("ofcanvas__header")}>
        <div className={cl("ofcanvas-logo") + " margin-center"}>
          <Img src={logo} width="100%" heigh="auto" />
        </div>
      </div>

      <div className={cl("ofcanvas__body")}>
        <ul>
          {listBodyItem.map((item, index) => (
            <li>
              <Link key={index}>
                <div className={cl("ofcanvas__body__item")}>
                  <h2 className={cl("item__title")}>{item.fiel}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={cl("ofcanvas__footer")}>
        <ul>
          <li>
            {listFootItem.map((item, index) => (
              <Link key={index}>
                <div className={cl("ofcanvas__footer__item")}>
                  <h2 className={cl("item__title")}>{item.fiel}</h2>
                </div>
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
