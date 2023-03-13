import React from "react";
import PropTypes from "prop-types";

import Header from "Layout/Component/Header";
import Footer from "Layout/Component/Footer";
import Navigator from "Layout/Component/SubHeader";
import Logo from "Layout/Component/Logo";
import SubHeader from "Layout/Component/SubHeader";
import BackTop from "Component/BackTop";

export default function LayoutDefault({
  children,
  navigator,
  homePage,
  path = "home",
}) {
  return (
    <div>
      <Logo />
      <Header homePage={homePage} />
      <SubHeader path={path} />
      {navigator && <Navigator>detail</Navigator>}
      {children}
      <Footer />
      <BackTop />
    </div>
  );
}

Navigator.propTypes = {
  children: PropTypes.node,
  navigator: PropTypes.bool,
  homePage: PropTypes.bool,
  path: PropTypes.string,
};
