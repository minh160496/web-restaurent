import LayoutDefault from "Layout/LayoutDefault";
import React from "react";
import classNames from "classnames/bind";

import Slider from "./Slider";
import styles from "./Home.module.scss";

const cl = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cl("home")}>
      <LayoutDefault>
        <main className="home">
          <Slider />
        </main>
      </LayoutDefault>
    </div>
  );
}
