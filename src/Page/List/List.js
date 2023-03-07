import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";

import LayoutNavBar from "Layout/LayoutNavBar";
import Sort from "./Sort";
import Cart from "Component/Cart";

import { contextProducts } from "App";

import styles from "./List.module.scss";

const cl = classNames.bind(styles);
export default function List() {
  const products = useContext(contextProducts);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(products);
  }, [products]);
  return (
    <LayoutNavBar path="/list">
      <div className={cl("list")}>
        <Sort />
      </div>
    </LayoutNavBar>
  );
}
