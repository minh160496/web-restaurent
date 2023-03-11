import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import LayoutNavBar from "Layout/LayoutNavBar";
import Head from "./Head";
import Content from "./Content";

import { contextProducts } from "App";
import { listBodyItem } from "Layout/Component/Header/OffCanvas";
import { BLOGS } from "CONST";

import styles from "./List.module.scss";

const cl = classNames.bind(styles);
export default function List({ path = "/list", isBlog = false }) {
  const products = useContext(contextProducts);
  const [productsCurrent, setProductsCurrent] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (!isBlog) {
      if (path === "/outStanding") {
        const productsCurrent = products.filter(
          (product) => product.isOutStanding
        );
        setProductsCurrent(productsCurrent);
      }

      if (path === "/list") {
        setProductsCurrent(products);
      }

      if (path === "/every") {
        const productsCurrent = products.filter((product) => product.every);
        setProductsCurrent(productsCurrent);
      }

      let title = listBodyItem.find((item) => item.path === path).fiel;
      if (title === "Menu") title = "Tất cả món ăn";
      setTitle(title);
    }

    if (isBlog) {
      const blogsCurr = JSON.parse(localStorage.getItem(BLOGS));
      setBlogs(blogsCurr);
      setTitle("Tin tức");
    }
  }, [products]);

  return (
    <LayoutNavBar path={path} isBlog={isBlog}>
      <div className={cl("list")}>
        <Head title={title} isBlog={isBlog} />
        <Content
          setTitle={(title) => setTitle(title)}
          products={productsCurrent}
          blogs={blogs}
        />
      </div>
    </LayoutNavBar>
  );
}

List.propTypes = {
  path: PropTypes.string,
  isBlog: PropTypes.bool,
};
