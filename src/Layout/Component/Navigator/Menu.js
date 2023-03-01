import React from "react";
import classNames from "classnames/bind";

import NavigatorItemWrapper from "./NavigatorItemWrapper";
import { ReactComponent as IconPlus } from "@/assets/icon/plus.svg";

import { listBodyItem } from "Layout/Component/Header/OffCanvas";

import styles from "./Navigator.module.scss";
import { Link } from "react-router-dom";

const cl = classNames.bind(styles);
export default function Menu() {
  return (
    <NavigatorItemWrapper filterName="Danh mục sản phẩm">
      <ul>
        {listBodyItem.map((item, index) => (
          <li key={index}>
            <Link to="/">
              <div className="flex align-center justify-between">
                <h4 className={cl("filter__item")}>{item.fiel}</h4>
                <div className={cl("icon")}>
                  <IconPlus fill="currentcolor" width={15} height={15} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </NavigatorItemWrapper>
  );
}
