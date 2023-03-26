import React, { useEffect } from "react";
import classNames from "classnames/bind";

import LayoutDefault from "Layout/LayoutDefault";
import Slider from "./Slider";
import About from "./About";
import Category from "./Category";
import TabProduct from "./TabProduct";
import ProductNew from "./ProductNew";
import Baner from "./Baner";
import CountUps from "./CountUp";
import Blog from "./Blog";
import FeedBack from "./FeedBack";

import styles from "./Home.module.scss";

const cl = classNames.bind(styles);
export default function Home() {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <div className={cl("home")}>
      <LayoutDefault isHomePage>
        <main className="home">
          <Slider />
          <About />
          <Category />
          <TabProduct />
          <ProductNew />
          <Baner />
          <CountUps />
          <Blog />
          <FeedBack />
        </main>
      </LayoutDefault>
    </div>
  );
}
