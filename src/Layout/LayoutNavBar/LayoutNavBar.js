import React, { createContext, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Header from "Layout/Component/Header";
import Footer from "Layout/Component/Footer";
import Main from "Layout/Component/Main";
import SubHeader from "Layout/Component/SubHeader";
import BackTop from "Component/BackTop";

import styles from "./LayoutNavBar.mudule.scss";

export const contextReRenderLayoutNavBar = createContext(null);

const cl = classNames.bind(styles);
export default function LayoutNavBar({
  navBarRight,
  isBlog = false,
  path = "/list",
  children,
}) {
  const [hasBlurContent, setHasBlurContent] = useState(false);
  const [hasReRender, setHasReRender] = useState({ value: false });
  const handleBlurContent = (bool) => {
    setHasBlurContent(bool);
  };
  const handleReRenderLayoutNavBar = () => {
    setHasReRender((prev) => ({ ...prev, value: true }));
  };

  return (
    <contextReRenderLayoutNavBar.Provider
      value={{ func: handleReRenderLayoutNavBar, value: hasReRender }}
    >
      <div className={cl("layout-navbar")}>
        <Header />
        <SubHeader path={path} />
        <Main
          isBlog={isBlog}
          navBarRight={navBarRight}
          handleBlurContent={handleBlurContent}
        >
          {children}
        </Main>
        <Footer />
        {hasBlurContent && <div className={cl("blurContent")}></div>}
        <BackTop />
      </div>
    </contextReRenderLayoutNavBar.Provider>
  );
}

LayoutNavBar.propTypes = {
  navBarRight: PropTypes.bool,
  isBlog: PropTypes.bool,
  children: PropTypes.node,
};
