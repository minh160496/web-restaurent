import React, { createContext } from "react";
import classNames from "classnames/bind";

import styles from "./LayoutNavBar.mudule.scss";
import Header from "Layout/Component/Header";
import Footer from "Layout/Component/Footer";
import Main from "Layout/Component/Main";
import Navigator from "Layout/Component/Navigator";

const cl = classNames.bind(styles);
export const LayoutContext = createContext();
export default function LayoutNavBar({ navBarRight, children }) {
  return (
    <LayoutContext.Provider value={navBarRight}>
      <div className={cl("layout-navbar")}>
        <Header />
        <Navigator>Navigator</Navigator>
        <Main>{children}</Main>
        <Footer />
      </div>
    </LayoutContext.Provider>
  );
}
