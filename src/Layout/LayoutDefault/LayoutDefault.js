import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import Header from "Layout/Component/Header";
import Footer from "Layout/Component/Footer";
import Navigator from "Layout/Component/SubHeader";
import Logo from "Layout/Component/Logo";
import SubHeader from "Layout/Component/SubHeader";
import BackTop from "Component/BackTop";
import ContactFix from "Component/ContactFix";

export const contextReRenderLayoutDefault = createContext(null);

export default function LayoutDefault({
  children,
  navigator,
  isHomePage,
  path = "home",
}) {
  const [hasReRender, setHasReRender] = useState({ value: false });
  const handleReRenderLayOutDefault = () => {
    setHasReRender((prev) => ({ ...prev, value: true }));
  };
  return (
    <contextReRenderLayoutDefault.Provider
      value={{ func: handleReRenderLayOutDefault, value: hasReRender.value }}
    >
      <div>
        <Logo />
        <Header isHomePage={isHomePage} />
        <SubHeader path={path} />
        {navigator && <Navigator>detail</Navigator>}
        {children}
        <Footer />
        <BackTop />
        <ContactFix />
      </div>
    </contextReRenderLayoutDefault.Provider>
  );
}

Navigator.propTypes = {
  children: PropTypes.node,
  navigator: PropTypes.bool,
  isHomePage: PropTypes.bool,
  path: PropTypes.string,
};
