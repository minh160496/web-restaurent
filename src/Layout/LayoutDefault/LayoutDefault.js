import React from "react";

import Footer from "Layout/Component/Footer";
import Header from "Layout/Component/Header";
import Navigator from "Layout/Component/Navigator";

export default function LayoutDefault({ children, navigator }) {
  return (
    <div>
      <Header />
      {navigator && <Navigator>detail</Navigator>}
      {children}
      <Footer />
    </div>
  );
}
