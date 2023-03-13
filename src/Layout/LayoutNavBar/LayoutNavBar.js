import React, { createContext, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Header from "Layout/Component/Header";
import Footer from "Layout/Component/Footer";
import Main from "Layout/Component/Main";
import SubHeader from "Layout/Component/SubHeader";
import BackTop from "Component/BackTop";

import styles from "./LayoutNavBar.mudule.scss";

const cl = classNames.bind(styles);
export const LayoutContext = createContext();
export default function LayoutNavBar({
  navBarRight,
  isBlog = false,
  path = "/list",
  children,
}) {
  const [hasBlurContent, setHasBlurContent] = useState(false);
  const handleBlurContent = (bool) => {
    setHasBlurContent(bool);
  };

  return (
    <LayoutContext.Provider value={navBarRight}>
      <div className={cl("layout-navbar")}>
        <Header />
        <SubHeader path={path} />
        <Main isBlog={isBlog} handleBlurContent={handleBlurContent}>
          {children}
        </Main>
        <Footer />
        {hasBlurContent && <div className={cl("blurContent")}></div>}
        <BackTop />
      </div>
    </LayoutContext.Provider>
  );
}

LayoutNavBar.propTypes = {
  navBarRight: PropTypes.bool,
  isBlog: PropTypes.bool,
  children: PropTypes.node,
};
