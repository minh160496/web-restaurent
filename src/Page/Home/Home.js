import React from "react";
import classNames from "classnames/bind";

import LayoutDefault from "Layout/LayoutDefault";
import Slider from "./Slider";
import About from "./About";
import Category from "./Category";
import TabProduct from "./TabProduct";

import styles from "./Home.module.scss";

const cl = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cl("home")}>
      <LayoutDefault isHomePage>
        <main className="home">
          <Slider />
          <About />
          <Category />
          <TabProduct />
        </main>
      </LayoutDefault>
    </div>
  );
}
