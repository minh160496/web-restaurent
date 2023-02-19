import React from "react";

import Header from "Layout/Component/Header";
import Footer from "Layout/Component/Footer";
import Navigator from "Layout/Component/Navigator";
import Logo from "Layout/Component/Logo";

export default function LayoutDefault({ children, navigator }) {
  return (
    <div>
      <Logo />
      <Header />
      {navigator && <Navigator>detail</Navigator>}
      {children}
      <Footer />
    </div>
  );
}
